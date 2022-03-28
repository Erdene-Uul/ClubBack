const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  content: {
    content1: {
      type: String,
      trim: true,
      required: true,
      maxlength: [5000, "Мэдээний урт дээд тал нь 5000 тэмдэгт байх ёстой."],
    },
    content2: {
      type: String,
      trim: true,
      required: true,
      maxlength: [5000, "Мэдээний урт дээд тал нь 5000 тэмдэгт байх ёстой."],
    },
  },
  photos: {
    photo1: {
      type: String,
      default: "no-photo.jpg",
    },
    photo2: {
      type: String,
      default: "no-photo.jpg",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("News", NewsSchema);
