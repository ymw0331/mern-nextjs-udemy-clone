import User from "../models/user";
const stripe = require( 'stripe' )( process.env.STRIPE_SECRET );
import queryString from "query-string";
import Course from "../models/course";
import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';

export const makeInstructor = async ( req, res ) =>
{
  try
  {
    // 1. find user from db
    // const user = await User.findById( req.user._id ).exec();
    const user = await User.findById( req.auth._id ).exec();
    console.log( "CURRENT_USER =>", user );

    // 2. if user dont have stripe_account_id yet, then create new
    if ( !user.stripe_account_id )
    {
      console.log( "CREATING STRIPE ID FOR ACCOUNT" );
      const account = await stripe.accounts.create( { type: "standard" } );
      console.log( 'ACCOUNT => ', account.id );
      user.stripe_account_id = account.id;
      user.save();
      console.log( "CREATED AND SAVED STRIPE ID" );

    }
    // 3. create account link based on account id (for frontend to complete onboarding)
    let accountLink = await stripe.accountLinks.create( {
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding",
    } );
    console.log( "ACCOUNTLINK =>", accountLink );
    // 4. pre-fill any info such as email (optional), then send url resposne to frontend
    accountLink = Object.assign( accountLink, {
      "stripe_user[email]": user.email,
    } );
    // 5. then send the account link as response to fronend
    res.send( `?${ queryString.stringify( accountLink ) }` );
    console.log( "RESPOND SEND TO FRONTEND TO ${ accountLink.url } " );
  } catch ( err )
  {
    console.log( "MAKE INSTRUCTOR ERR ", err );
  }
};


export const getAccountStatus = async ( req, res ) =>
{
  try
  {
    // const user = await User.findById( req.user._id ).exec();
    const user = await User.findById( req.auth._id ).exec();
    console.log( "GETACCOUNTSTATUS USER =>", user );
    const account = await stripe.accounts.retrieve( user.stripe_account_id );
    console.log( "GETACCOUNTSTATUS ACCOUNT => ", account );

    if ( !account.charges_enabled )
    {
      return res.status( 401 ).send( "Unauthorized" );
    } else
    {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: "Instructor" }, //addtoset does not duplicate
        },
        { new: true }
      )
        .select( "-password" )
        .exec();

      console.log( "GETACCOUNTSTATUS statusupdated => ", statusUpdated );
      res.json( statusUpdated );
    }
  } catch ( err )
  {
    console.log( err );
  }
};


export const currentInstructor = async ( req, res ) =>
{
  try
  {
    let user = await User.findById( req.auth._id )
      .select( "-password" )
      .exec();
    // console.log( "CURRENT INSTRUCTOR => ", user );
    if ( !user.role.includes( "Instructor" ) )
    {
      return res.sendStatus( 403 );
    } else
    {
      res.json( { ok: true } );
    }
  } catch ( err )
  {
    console.log( err );
  }
};



export const instructorCourses = async ( req, res ) =>
{
  try
  {
    const courses = await Course
      .find( { instructor: req.auth._id } )
      .sort( { createdAt: -1 } )
      .exec();

    res.json( courses );

  } catch ( error )
  {
    console.log( error );
  }
};