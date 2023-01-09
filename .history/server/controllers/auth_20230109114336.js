import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

export const register = ( req, res ) =>
{

  try
  {
    // console.log( req.body );
    const { name, email, password } = req.body;

    //validation
    if(!name) return res.status(400).send("Name is required")
    if(!password || password.length < 6){
      return res.status(400).send("Password is required and should be min ")
    }

  } catch ( error )
  {
    console.log( error );
  }
};  