import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

export const register = ( req, res ) =>
{

  try
  {
    // console.log( req.body );
    const { name, email, password } = req.body;

    //validation
    if(!name)

  } catch ( error )
  {
    console.log( error );
  }
};  