import AWS from 'aws-sdk';
import nanoid from 'nanoid';

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
    const base64Data = new Buffer.from( image
      .replace( /^data:image\/\w+;base64,/, "" ),
      "base64"
    );

    const type = image.split( ";" )[ 0 ].split( "/" )[ 1 ];

    //image params
    const params = {
      Bucket: "wayne-edemy-bucket",
      Key: `${ nanoid() }.${ type }`, //kdjfs.jpeg
      Body: base64Data,
      ACL: 'public-read',
      ContentEncoding: "base64",
      ContentTpye: `image/${ type }`
    };

    //upload to S3
    S3.upload( params, ( err, data ) =>
    {
      if ( err )
      {
        console.log( err );
        return res.sendStatus( 400 );
      }
      console.log( data );
      res.send( data );
    } );

  } catch ( error )
  {
    console.log( error );
  }

};



export const removeImage = async ( req, res ) =>
{
  try
  {
    const { image } = req.body;
    const params = {
      Bucket: image.Bucket,
      Key: image.Key
    };

    //send remove request to S3
    S3.deleteObject( params, ( err, data ) =>
    {
      if ( err )
      {
        console.log( err );
        res.send
      }
    } );



  } catch ( error )
  {
    console.log( error );
  }
};