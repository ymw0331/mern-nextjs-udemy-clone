import { expressjwt } from 'express-jwt';

export const requireSignin = expressjwt( {
  getToken: ( req, res ) => req.cookie.token,
  secret: process.env.JWT_SECRET,
  algorithms: [ "HS265" ]
} );