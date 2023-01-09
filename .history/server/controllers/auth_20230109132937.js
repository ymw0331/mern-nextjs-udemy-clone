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
    // console.log( req.body );
    // 1. destructure name, email, password from req.body

    // check if our db has user with that email
    const { email, password } = req.body;

    const user = await User.findOne( { email } ).exec();
    if ( !user ) return res.status( 400 ).send( "No user found" );

    //check password
    const match = await comparePassword( password, user.password );


  } catch ( err )
  {
    console.log( err );
    return res.statu( 400 ).send( "Error. Try again." );
  }
};