import express from 'express';

const router = express.Router();
//midddlewares
import { requireSignin } from '../middlewares/index.js';

//controllers
import { register, login, logout } from '../controllers/auth.js';

router.post( "/register", register );
router.post( "/login", login );
router.get( "/logout", logout );
router.get( "/current-user", requireSignin, currentUser );




module.exports = router;