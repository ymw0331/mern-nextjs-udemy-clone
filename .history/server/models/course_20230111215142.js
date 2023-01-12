import mongoose from "mongoose";
const { Schema } = mongoose;

const lessonSchema = new mongoose.Schema( {

  title: {
    type: String,
    trim: true,
    minlength: 3,
    maxlenght: 320,
    required: true
  },
  slug: {
    type: String,
    lowercase: true
  },
  content: {
    type: {},
    minglength: 200,
  },
  video_link: {},
  free_preview: {
    type: Boolean,
    default: false
  },
},
  { timestamps: true }
);


const courseSchema = new mongoose.Schema( {
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlenght: 320,
    required: true
  },
  slug: {
    type: String,
    lowercase: true
  }
} );