import expressJwt from 'express-jwt'

export const requireSignin = expressJwt({
  getToken: () => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorith
})