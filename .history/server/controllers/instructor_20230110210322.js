import User from "../models/user";
// import stripe from "stripe";
const stripe = require( 'stripe' )( process.env.STRIPE_SECRET );
import queryString from "query-string";
// const queryString = require( "query-string" );
// import queryString from 'query-string';
// import useQueryString from 'use-query-string';
// const useQueryString = require( "use-query-string" );
const urlParse = require( 'url-parse' );


export const makeInstructor = async ( req, res ) =>
{
  try
  {
    // 1. find user from db
    // const user = await User.findById( req.user._id ).exec();
    const user = await User.findById( req.auth._id ).exec();
    console.log( "CURRENT_USER", user );

    // 2. if user dont have stripe_account_id yet, then create new
    if ( !user.stripe_account_id )
    {
      const account = await stripe.accounts.create( { type: "standard" } );
      console.log( 'ACCOUNT => ', account.id );
      user.stripe_account_id = account.id;
      user.save();
    }
    // 3. create account link based on account id (for frontend to complete onboarding)
    let accountLink = await stripe.accountLinks.create( {
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding",
    } );
    console.log( accountLink );
    // 4. pre-fill any info such as email (optional), then send url resposne to frontend
    accountLink = Object.assign( accountLink, {
      "stripe_user[email]": user.email,
    } );
    // 5. then send the account link as response to fronend
    res.send( `${ accountLink.url }?${ queryString.stringify( accountLink ) }` );
  } catch ( err )
  {
    console.log( "MAKE INSTRUCTOR ERR ", err );
  }
};


export const getAccountStatus = async ( req, res ) =>
{
  try
  {
    const user = await User.findById( req.user._id ).exec();
    const account = await stripe.accounts.retrieve( user.stripe_account_id );

    if ( !account.charges_enabled )
    {
      return res.status( 401 ).send( "Unauthorized" );
    }


  } catch ( error )
  {
    console.log( error );
  }

};