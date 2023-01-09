import express from 'express';


const router = express.Router();

router.getget( '/', ( req, res ) =>
{
  res.send( 'you hit the home page' );
} );