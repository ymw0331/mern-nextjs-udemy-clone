import AWS from 'aws-sdk';
import nanoid from 'nanoid';
import Course from "../models/course.js";
import slugify from "slugify";
import { readFileSync } from "fs"; //fs.readFileSync

require("dotenv").config();

const awsConfig = {
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION
};


const S3 = new AWS.S3(awsConfig);

export const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.status(400).send("No image");

    //prepare the image
    const base64Data = new Buffer.from(image
      .replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const type = image.split(";")[0].split("/")[1];

    //image params
    const params = {
      Bucket: "wayne-udemy-clone",
      Key: `${nanoid()}.${type}`, //kdjfs.jpeg
      Body: base64Data,
      ACL: 'public-read',
      ContentEncoding: "base64",
      ContentTpye: `image/${type}`
    };

    //upload to S3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log("Image Uploaded =>", data);
      res.send(data);
    });

  } catch (error) {
    console.log(error);
  }

};

// todo
// ERROR: ACCESS DENIED Fix it later
export const removeImage = async (req, res) => {
  try {
    const { image } = req.body;
    console.log("IMAGE DELETED =>", image);

    // image params
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    // send remove request to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log("DELETE IMAGE =>", err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log("DELETE IMAGE =>", err);
  }
};

export const create = async (req, res) => {
  // console.log( "CREATE COURSE =>", req.body );
  // return;
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });


    if (alreadyExist) return res.status(400).send("Title is taken");

    const courses = await new Course({
      slug: slugify(req.body.name),
      instructor: req.auth._id,
      ...req.body
    }).save();

    res.json(courses);

  } catch (error) {
    console.log(error);
    return res.status(400).send("Course create failed. Try again.");

  }
};


export const read = async (req, res) => {
  try {
    const course = await Course
      .findOne({ slug: req.params.slug })
      .populate("instructor", "_id name")
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};


export const uploadVideo = async (req, res) => {
  try {

    // console.log('req.user_id ==>', req.auth._id)
    // console.log('req.params.instructorId ==>', req.params.instructorId)

    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send("Unauthorized")
    }

    // return
    const { video } = req.files;
    // console.log( video );

    if (!video) return res.status(400).send("No video");

    // video params
    const params = {
      Bucket: "wayne-udemy-clone",
      Key: `${nanoid()}.${video.type.split("/")[1]}`, //kdjfs.mp4
      Body: readFileSync(video.path),
      ACL: 'public-read',
      ContentTpye: video.type
    };

    //upload to s3
    S3.upload(params, (error, data) => {
      if (error) {
        console.log("S3 Upload Error => ", error);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });


  } catch (error) {
    console.log("UPLOAD VIDEO =>", error);
  }
};



export const removeVideo = async (req, res) => {
  try {

    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send("Unauthorized")
    }
    const { Bucket, Key } = req.body;

    console.log("VIDEO REMOVED ==>", req.body);
    // return

    // if (!video) return res.status(400).send("No video");

    // video params
    const params = {
      Bucket,
      Key
    };

    // delete object from s3
    S3.deleteObject(params, (error, data) => {
      if (error) {
        console.log("S3 Object Delete Error => ", error);
        res.sendStatus(400);
      }
      console.log(data);
      res.send({ ok: true });
    });
  } catch (error) {
    console.log("DELETE VIDEO =>", error);
  }
};





export const addLesson = async (req, res) => {

  try {

    const { slug, instructorId } = req.params
    const { title, content, video } = req.body

    if (req.auth._id != instructorId) {
      return res.status(400).send("Unauthorized")
    }

    const updated = await Course.findOneAndUpdate({ slug }, {
      $push: { lessons: { title, content, video, slug: slugify(title) } }
    }, { new: true })
      .populate('instructor', '_id name')
      .exec()

    res.json(updated)


  } catch (error) {
    console.log(error)
    return res.status(400).send("Add lesson failed")
  }


}