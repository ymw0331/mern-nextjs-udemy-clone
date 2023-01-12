import express from "express";

const router = express.Router();

// middleware
import { isInstructor, requireSignin } from "../middlewares";

// controllers
import { uploadImage, removeImage, create, read } from "../controllers/course.js";

//iamge
router.post( "/course/upload-image", uploadImage );
router.post( "/course/remove-image", removeImage );

//course
router.post( "/course", requireSignin, isInstructor, create );
router.post( "/course/:slug", read );

module.exports = router;
