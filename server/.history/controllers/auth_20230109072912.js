import express from 'express';

const router = express.Router();

//controllers
const { register }from '../controllers/auth.js';
router.get( '/register', ( req, res ) =>
{
  res.send( 'register user' );
} );
