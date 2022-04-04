const express = require("express");

const { createUser, getUsers } = require("../controller/users");

const router = express.Router();

//"/api/v1/categories"
router.route("/").post(createUser).get(getUsers);

module.exports = router;
