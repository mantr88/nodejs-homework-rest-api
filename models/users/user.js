const { Schema, model } = require("mongoose");

const userShema = Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: String,
  },
  {
    versionKey: false,
    timestams: true,
  }
);

const User = model("user", userShema);

module.exports = User;
