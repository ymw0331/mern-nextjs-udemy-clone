import express from "express";
import dotenv from "dotenv"; //environment variables
import mongoose from 'mongoose';
import cors from "cors";
import fs from "fs";


const morgan = require( "morgan" );

dotenv.config();


//create express app
const app = express();

//apply middlewares
app.use( cors() );
app.use( express.json() );
app.use( morgan( "dev" ) );


//route
fs.readdirSync('')


//port
const port = process.env.PORT || 8000;

app.listen( port, () =>
{
  console.log( `Node server is running on port ${ port }` );
} );
