import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from "jsonwebtoken";
import AWS from 'aws-sdk';
import nanoid from 'nanoid';

const awsConfig = {
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION
};

const SES = new AWS.SES( awsConfig );

export const register = async ( req, res ) =>
{
  try
  {
    // console.log( req.body );
    const { name, email, password } = req.body;

    //validation
    if ( !name ) return res.status( 400 ).send( "Name is required" );
    if ( !password || password.length < 6 )
    {
      return res
        .status( 400 )
        .send( "Password is required and should be min 6 characters long" );
    }

    let userExist = await User.findOne( { email } ).exec();
    if ( userExist ) return res.status( 400 ).send( "Email is taken" );

    //hash password
    const hashedPassword = await hashPassword( password );

    //register
    const user = await new User( {
      name, email, password: hashedPassword
    } );
    await user.save();
    // console.log( "saved user", user );
    return res.json( { ok: true } );

  } catch ( error )
  {
    console.log( error );
  }
};

export const login = async ( req, res ) =>
{
  try
  {
    // console.log(req.body);
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne( { email } ).exec();
    if ( !user ) return res.status( 400 ).send( "No user found" );
    // check password
    const match = await comparePassword( password, user.password );
    // create signed jwt
    const token = jwt.sign( { _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    } );
    // return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie( "token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    } );
    // send user as json response
    res.json( user );
  } catch ( err )
  {
    console.log( err );
    return res.status( 400 ).send( "Error. Try again." );
  }
};


export const logout = async ( req, res ) =>
{
  try
  {
    res.clearCookie( "token" );
    return res.json( { message: "Signout success" } );
  } catch ( error )
  {
    console.log( error );
  }
};

export const currentUser = async ( req, res ) =>
{
  try
  {
    const user =
      // await User.findById( req.user._id ).select( "-password" ).exec();
      await User.findById( req.auth._id ).select( "-password" ).exec();
    console.log( "CURRENT_USER", user );
    return res.json( { ok: true } );
  } catch ( err )
  {
    console.log( err );
  }
};


export const sendTestEmail = async ( req, res ) =>
{
  // console.log( 'send email using ses' );
  // res.json( { ok: true } );
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [ 'ymw0331@hotmail.com' ]
    },
    ReplyToAddresses: [ process.env.EMAIL_FROM ],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html>
            <h1>Reset password link</h1>
            <p>Please use the following link to reset your password</p>
          </html>
          `
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Password reset link"
      }
    },
  };

  const emailSent = SES.sendEmail( params ).promise();
  emailSent
    .then( ( data ) =>
    {
      console.log( data );
      res.json( { ok: true } );
    } )
    .catch( ( err ) =>
    {
      console.log( err );
    } );

};


export const forgotPassword = async ( req, res ) =>
{
  try
  {
    const { email } = req.body;
    // console.log( email );
    const shortCode = nanoid( 6 ).toUpperCase();

    const user =
      await User.findOneAndUpdate(
        { email },
        { passwordResetCode: shortCode }
      );
    if ( !user )
      return res.status( 400 ).send( "User not found" );

    //prepare emails
    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: [ email ]
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "Reset password"
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
          <html>
            <h1>Reset password</h1>
            <p>Use this code to reset your password</p>
            <h2 style="color:red;">${ shortCode }</h2>
            <i>edemy.com</i>
          </html>
       `
          }
        }
      }
    };

    const emailSent = SES.sendEmail( params ).promise();
    emailSent.then( ( data ) =>
    {
      console.log( data );
      res.json( { ok: true } );
    } )
      .catch( err =>
      {
        console.log( err );
      } );


  } catch ( error )
  {
    console.log( error );
  }
};

export const resetPassword = async ( req, res ) =>
{
  try
  {
    const { email, code, newPassword } = req.body;
    // console.table( { email, code, newPassword } );

    //find user based on email and code
    const hashedPassword = await hashPassword( newPassword );

    const user = User.findOneAndUpdate( {
      email, passwordResetCode: code,

    }, {
      password: hashedPassword,
      passwordResetCode: ""
    }
    ).exec();
    res.json( { ok: true } );

  } catch ( error )
  {
    console.log( error );
    return res.status( 400 ).send( "Error! Try again." );
  }
};