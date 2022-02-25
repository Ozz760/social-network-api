const router = require("express").Router();
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
} = require("../../controllers/usersController");

// /api/users
router.route("/").get(getAllUsers).post(createUsers);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// add routes for users
module.exports = router;
