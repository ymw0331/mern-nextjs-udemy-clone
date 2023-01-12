import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { makeInstructor, getAccountStatus, currentInstructor } from "../controllers/instructor";

router.post( "/make-instructor", requireSignin, makeInstructor );
router.post( "/get-account-status", requireSignin, getAccountStatus );
router.get( "/current-instructor", requireSignin, currentInstructor );

router.get("/instructor-courses", )

module.exports = router;
