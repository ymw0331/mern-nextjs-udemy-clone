import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { uploadImage } from "../controllers/course.js";

router.post( "/course/upload-image", uploadImage );

module.exports = router;
