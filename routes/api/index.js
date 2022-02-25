const router = require("express").Router();
const thoughtRouter = require("./thoughtsRouter");
const usersRouter = require("./usersRouter");

router.use("/thoughts", thoughtRouter);
router.use("/users", usersRouter);

module.exports = router;
