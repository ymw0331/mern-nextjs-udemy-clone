import express from 'express';

const router = express.Router();

//controllers
router.get( '/register', ( req, res ) =>
{
  res.send( 'register user' );
} );
