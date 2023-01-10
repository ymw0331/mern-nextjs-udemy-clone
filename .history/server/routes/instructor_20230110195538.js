import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";


import { makeInstructor } from "../controllers/instructor.js";

router.post( "/make-instuctor ", requireSignin, makeInstructor );

module.exports = router;