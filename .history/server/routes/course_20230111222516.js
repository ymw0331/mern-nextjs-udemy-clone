import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { uploadImage, removeImage } from "../controllers/course.js";

//iamge
router.post( "/course/upload-image", uploadImage );
router.post( "/course/remove-image", removeImage );

//course
router.post("/course", requireSignIn)

module.exports = router;
