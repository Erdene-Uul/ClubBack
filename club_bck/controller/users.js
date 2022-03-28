const Users = require("../models/users");
const MyError = require('../utils/myError');
const asyncHandler = require('../middleware/asyncHandler');

exports.createUser = asyncHandler(async (req, res, next) => {
    console.log("data: ", req.body);
  
    const user = await Users.create(req.body);
  
    res.status(200).json({
      success: true,
      data: user,
    });
  });