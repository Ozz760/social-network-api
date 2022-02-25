const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(
            email
          );
        },
        message: "please use a valid email address",
      },
    },
    thought: {
      id: [
        {
          type: Schema.Types.ObjectId,
          ref: "thought",
        },
      ],
    },
    friends: {
      id: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
