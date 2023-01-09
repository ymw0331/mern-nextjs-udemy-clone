import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from "jsonwebtoken";
import { json } from 'express';

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
    // console.log( req.body );

    // 1. check if our db has user with that email
    const { email, password } = req.body;

    const user = await User.findOne( { email } ).exec();
    if ( !user ) return res.status( 400 ).send( "No user found" );

    // 2. check password
    const match = await comparePassword( password, user.password );

    // 3. create signed jwt
    const token = jwt.sign( { _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' } );

    // 4. return user and token to client, exlude hashed password
    user.password = undefined;

    // 5. send token in cookie
    res.cookie( "token", token, {
      httpOnly: true,
      // secure: true, // only work on https
    } );

    // 6. send user as json response
    res.json( user );

  } catch ( err )
  {
    console.log( err );
    return res.statu( 400 ).send( "Error. Try again." );
  }
};


export const logout = async ( req, res ) =>
{
  try
  {
    res.clearCookie( "to" );


  } catch ( error )
  {
    console.log( error );
  }
};