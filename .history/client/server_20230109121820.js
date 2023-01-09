const express = require( 'express' );
const next = require( 'next' );
const { createProxyMiddleware } = require( "http-proxy-middleware" );


const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handle = app.getRequestHandler();

app.prepare().then( () =>
{
  const server = express();

  //apply proxy in dev mode

  if ( dev )
  {
    server.use( '/api', createProxyMiddleware( {
      target: 'http://localhost:8000',
      
    } ) );
  }
} )
  .catch( ( err ) =>
  {
    console.log( "Error", err );
  } );