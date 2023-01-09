import express from 'express';

const router = express.Router();

//controllers
import { register, login } from '../controllers/auth.js';

router.post( "/register", register );
router.post( "/login", login );
router.post( "/login", logout );





module.exports = router;