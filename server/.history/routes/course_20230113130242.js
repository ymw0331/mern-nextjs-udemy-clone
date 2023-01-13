import express from "express";
import formidable from 'express-formidable';

const router = express.Router();

// middleware
import { isInstructor, requireSignin } from "../middlewares";

// controllers
import { uploadImage, removeImage, create, read, uploadVideo } from "../controllers/course.js";

//image
router.post( "/course/upload-image", uploadImage );
router.post( "/course/remove-image", removeImage );

//course
router.post( "/course", requireSignin, isInstructor, create );
router.get( "/course/:slug", read );
router.post( "/course/video-upload", requireSignin, formidable( { maxFileSize: 700 * 1024 * 1024 } ), uploadVideo );

module.exports = router;
