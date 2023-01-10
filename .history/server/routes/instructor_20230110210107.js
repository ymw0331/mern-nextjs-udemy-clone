import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { makeInstructor } from "../controllers/instructor";

router.post( "/make-instructor", requireSignin, makeInstructor );
router.post("/get-account-status")

module.exports = router;
