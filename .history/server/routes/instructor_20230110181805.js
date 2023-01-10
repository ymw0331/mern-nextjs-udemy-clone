import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

import { makeInstuctor } from "../controllers/instructor.js";

module.exports = router;