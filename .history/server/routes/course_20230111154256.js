import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import {  } from "../controllers/c";

router.post( "/register", register );

module.exports = router;
