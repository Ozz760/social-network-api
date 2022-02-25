const router = require("express").Router();
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
} = require("../../controllers/usersController");

// /api/users
router.routes("/").get(getAllUsers).post(createUsers);

// /api/users/:userId
router.routes("/userId").get(getSingleUser).delete(deleteUser);

// add routes for users
module.exports = router;
