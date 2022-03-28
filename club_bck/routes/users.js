const express = require("express");

const {
  createUser
} = require("../controller/users");

const router = express.Router();

//"/api/v1/categories"
router.route("/").post(createUser);

module.exports = router;
