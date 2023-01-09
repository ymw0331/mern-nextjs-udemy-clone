import dotenv from "dotenv"; //environment variables
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
const morgan = require( "morgan" );
require( "dotenv" ).config();


//create express app
const app = express();

//apply middlewares
app.use( cors );