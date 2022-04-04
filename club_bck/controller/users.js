const Users = require("../models/users");
const asyncHandler = require("../middleware/asyncHandler");

exports.createUser = asyncHandler(async (req, res, next) => {
  console.log("data: ", req.body);

  const user = await Users.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    success: true,
    data: users,
  });
});
