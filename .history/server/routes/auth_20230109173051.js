import express from 'express';

const router = express.Router();


//controllers
import { register, login, logout } from '../controllers/auth.js';

router.post( "/register", register );
router.post( "/login", login );
router.get( "/logout", logout );
router.get( "/current-user", );




module.exports = router;