import User from '../models/user';

export const register = ( req, res ) =>
{
  console.log( req.body );
  res.send( 'register form controller' );
};  