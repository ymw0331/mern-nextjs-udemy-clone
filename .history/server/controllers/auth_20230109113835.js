import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

export const register = ( req, res ) =>
{
  console.log( req.body );
  res.send( 'register form controller' );
};  