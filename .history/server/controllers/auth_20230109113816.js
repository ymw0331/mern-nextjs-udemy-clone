import User from '../models'

export const register = ( req, res ) =>
{
  console.log( req.body );
  res.send( 'register form controller' );
};  