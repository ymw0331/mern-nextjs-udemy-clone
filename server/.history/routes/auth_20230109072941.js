import express from 'express';

const router = express.Router();

const { register } from '../controllers/auth.js';



router.get( '/register', ( req, res ) =>
{
  res.send( 'register user' );
} );





module.exports = router;