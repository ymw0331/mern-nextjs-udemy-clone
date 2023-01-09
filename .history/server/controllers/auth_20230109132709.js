import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from "jsonwebtoken";

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
    console.log( req.body );
    1. destructure name, email, password from req.body
    const { email, password } = req.body;
    // 2. all fields require validation
    if ( !email )
    {
      return res.json( { error: "Email is taken" } );
    }
    if ( !password || password.length < 6 )
    {
      return res.json( { error: "Password must be at least 6 characters long" } );
    }
    // 3. check if email is taken
    const user = await User.findOne( { email } );
    if ( !user )
    {
      return res.json( { error: "User not found" } );
    }
    // 4. compare password
    const match = await comparePassword( password, user.password );
    if ( !match )
    {
      return res.json( { error: "Wrong password" } );
    }
    // 5. create signed jwt
    const token = jwt.sign( { _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    } );
    // 7. send response
    res.json( {
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    } );
  } catch ( err )
  {
    console.log( err );
    return res.statu( 400 ).send( "Error. Try again." );
  }
};