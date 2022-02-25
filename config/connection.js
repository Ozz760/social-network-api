// create connection with mongoose and export it
const { connect, connection } = require("mongoose");

connect("mongodb://localhost:27017/socialDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
