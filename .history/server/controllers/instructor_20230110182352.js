import User from "../models/user";
import stripe from "stripe";
import queryString from "query-string";

export const makeInstuctor = async ( req, res ) =>
{
  // 1. find user from db
  const user = await User.findById( req.user._id ).exec();

  // 2. if user dont have stripe_account_id yet, then create new
  if ( !user.stripe_account_id )
  {
    const account = await stripe.AccountsResource.create()
  }

  // 3. create account link based on account id (for frontend to complete onboarding)
  // 4. pre-fill any info such as email (optional), then send url response to frontend
  // 5. then send the account link as json as response to frontend


};