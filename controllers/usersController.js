// export functions for handling user requests
const mongoose = require("mongoose");
const { Users } = require("../models");

module.exports = {
  getUsers(req, res) {
    Users.find()
      .then(async (students) => {
        return res.json(studentObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
