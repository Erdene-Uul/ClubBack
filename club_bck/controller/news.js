const News = require("../models/News");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleware/asyncHandler");

exports.getNews = asyncHandler(async (req, res, next) => {
  const news = await News.find();

  res.status(200).json({
    success: true,
    data: news,
  });
});

exports.getContent = asyncHandler(async (req, res, next) => {
  const content = await News.findById(req.params.id);

  if (!content) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүй.", 400);
  }

  res.status(200).json({
    success: true,
    data: content,
  });
});

exports.createContent = asyncHandler(async (req, res, next) => {
  console.log("data: ", req.body);

  const content = await News.create(req.body);

  res.status(200).json({
    success: true,
    data: content,
  });
});

exports.updateContent = asyncHandler(async (req, res, next) => {
  const content = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!content) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүй.", 400);
  }

  res.status(200).json({
    success: true,
    data: content,
  });
});

exports.deleteContent = asyncHandler(async (req, res, next) => {
  const content = await News.findByIdAndDelete(req.params.id);

  if (!content) {
    throw new MyError(req.params.id + " ID-тэй мэдээ байхгүй.", 400);
  }

  res.status(200).json({
    success: true,
    data: content,
  });
});
