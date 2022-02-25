// export functions for handling user requests
const mongoose = require("mongoose");
const { Users } = require("../models");

module.exports = {
  getUsers(req, res) {
    Users.find()
      .then(async (user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
