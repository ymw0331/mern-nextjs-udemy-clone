import User from "../models/user"

export const makeInstuctor = async ( req, res ) =>
{
  // 1.find user from db
  // 2.if user dont have stripe_account_id yet, then create new
  // 3.create account link based on account id (for frontend to complete onboarding)


};