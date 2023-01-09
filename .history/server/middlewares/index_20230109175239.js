import { expressjwt } from 'express-jwt';

export const requireSignin = expressjwt( {
  getToken: ( res, req ) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: [ "HS265" ]
} );