import User from "../models/user";
import stripe from "stripe";
import queryString from "query-string";
// const queryString = require( "query-string" );
// import queryString from 'query-string';
// import useQueryString from 'use-query-string';
// const useQueryString = require( "use-query-string" );
const urlParse = require( 'url-parse' );


export const makeInstuctor = async ( req, res ) =>
{
  try
  {
    // 1. find user from db
    const user = await User.findById( req.user._id ).exec();
    console.log( "USER =>", user );

    // 2. if user dont have stripe_account_id yet, then create new
    if ( !user.stripe_account_id )
    {
      const account = await stripe.AccountsResource.create( {
        type: "express"
      } );
      console.log( "ACCOUNT => ", account.id );
      user.stripe_account_id = account.id;
      user.save();
    }

    // 3. create account link based on account id (for frontend to complete onboarding
    const accountLink = await stripe.accountLinks.create( {
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding"
    } );

    console.log( accountLink );

    // 4. pre-fill any info such as email (optional), then send url response to frontend
    accountLink = Object.assign( accountLink, {
      "stripe_user[email]": user.email,
    } );


    // 5. then send the account link as json as response to frontend
    res.send( `${ accountLink }? ${ queryString.stringify( accountLink ) }` );

  } catch ( error )
  {
    console.log( error );
  }

};