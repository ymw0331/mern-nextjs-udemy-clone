import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

export const register = ( req, res ) =>
{

  try
  {
    const { name, email, password } = req.body;
    
    console.log( req.body );

  } catch ( error )
  {
    console.log( error );
  }
};  