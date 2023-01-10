import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { register, login, logout, currentUser, sendTestEmail } from "../controllers/auth";
import ForgotPassword from '../../client/pages/forgot-password';

router.post( "/register", register );
router.post( "/login", login );
router.get( "/logout", logout );
router.get( "/current-user", requireSignin, currentUser );
router.get( "/send-email", sendTestEmail );
router.post('/forgot-password', ForgotPassword)

module.exports = router;
