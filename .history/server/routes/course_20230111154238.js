import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {  resetPassword } from "../controllers/auth";

router.post( "/register", register );

module.exports = router;
