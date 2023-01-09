import express from "express";
import dotenv from "dotenv"; //environment variables
import mongoose from 'mongoose';
import morgan from "morgan"; //log request endpoints
import cors from "cors";


dotenv.config();


//create express app
const app = express();

//apply middlewares
app.use( cors() );
app.use( express.json() );
app.use( morgan( "dev" ) );
app.use( console.log( "this is my own middleware" ) );

//route
app.get( '/', ( req, res ) =>
{
  res.send();
} );

//port
