import express from "express";
import dotenv from "dotenv"; //environment variables
import mongoose from 'mongoose';
import cors from "cors";
import { readdirSync } from "fs";
import csrf from "csrf"

const morgan = require( "morgan" );

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
app.use( morgan( "dev" ) );


//route
readdirSync( './routes' ).map( ( r ) =>
  app.use( '/api', require( `./routes/${ r }` ) )
);

//port
const port = process.env.PORT || 8000;


app.listen( port, () =>
{
  console.log( `Node server is running on port ${ port }` );
} );

