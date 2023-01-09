import express from "express";
import dotenv from "dotenv"; //environment variables
import mongoose from 'mongoose';
import cors from "cors";
import { readdirSync } from "fs";
import csrf from "csurf";

const morgan = require( "morgan" );
const csrfProctection = csrf( { cookie: true } );

dotenv.config();


//create express app
const app = express();


//db connection
mongoose
  .connect( process.env.DATABASE, {} )
  .then( () => console.log( "**MongoDB connected**" ) )
  .catch( ( err ) => console.log( "DB Error => ", err ) );


//apply middlewares
app.use( cors() );
app.use( express.json() );
app.use( cookieParser );
app.use( morgan( "dev" ) );


//route
readdirSync( './routes' ).map( ( r ) =>
  app.use( '/api', require( `./routes/${ r }` ) )
);


//csrf
app.use( () => csrfProctection );

app.get( '/api/csrf-token', ( req, res ) =>
{
  res.json( { csrfToken: req.csrfToken() } );
} );

//port
const port = process.env.PORT || 8000;


app.listen( port, () =>
{
  console.log( `Node server is running on port ${ port }` );
} );

