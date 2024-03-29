import express from "express";
import formidable from 'express-formidable';

const router = express.Router();

// middleware
import { isInstructor, requireSignin } from "../middlewares";

// controllers
import {
    uploadImage,
    removeImage,
    create,
    read,
    uploadVideo,
    removeVideo,
    addLesson
} from "../controllers/course.js";

//image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

//course
router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);

router.post("/course/video-upload/:instructorId", requireSignin, formidable({ maxFileSize: 700 * 1024 * 1024 }), uploadVideo);

router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

// axios.post(`/api/course/lesson/${slug}/${course.instructor._id}`,
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson)

module.exports = router;
