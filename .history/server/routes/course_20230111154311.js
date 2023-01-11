import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { } from "../controllers/course.js";

router.post( "/u", register );

module.exports = router;
