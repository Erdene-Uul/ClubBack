const express = require("express");

const {
  getNews,
  getContent,
  createContent,
  updateContent,
  deleteContent,
} = require("../controller/news");

const router = express.Router();

//"/api/v1/categories"
router.route("/").get(getNews).post(createContent);

router.route("/:id").get(getContent).put(updateContent).delete(deleteContent);

module.exports = router;
