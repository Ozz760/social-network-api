const router = require("express").Router();
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/usersController");

// /api/users
router.route("/").get(getAllUsers).post(createUsers);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// add routes for users
module.exports = router;
