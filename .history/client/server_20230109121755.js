const express = require( 'express' );
const next = require( 'next' );
const { createProxyMiddle } = require( "http-proxy-middleware" );


const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handle = app.getRequestHandler();

app.prepare().then( () =>
{
  const server = express();

  //apply proxy in dev mode

  if ( dev )
  {
    server.use('/api', createProxyMiddle)
  }
} )
  .catch( ( err ) =>
  {
    console.log( "Error", err );
  } );