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
router.get( "/course/:slug", read );


router.post( "/course/video-upload", requireSignin, getAccountStatus );

module.exports = router;
