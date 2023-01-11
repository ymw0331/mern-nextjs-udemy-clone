import AWS from 'aws-sdk';
import { nanoid } from "nanoid";

const awsConfig = {
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION
};
const S3 = new AWS.S3( awsConfig );

export const uploadImage = async ( req, res ) =>
{
  try
  {
    const { image } = req.body;
    if ( !image ) return res.status( 400 ).send( "No image" );

    //prepare the image
    const base64Data = new Buffer.from(image: /^data:image\/w/);

  } catch ( error )
  {
    console.log( error );
  }

};