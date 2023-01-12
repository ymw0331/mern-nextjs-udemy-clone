import mongoose from "mongoose";
const { Schema } = mongoose;

const courseSchema = new mongoose.Schema( {


  title: {
    type: String,
    trim: true,
    minlength: 3,
    maxlenght: 320,
    requr
  }
} );