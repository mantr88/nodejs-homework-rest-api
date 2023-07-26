const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const User = require("../../models/users/index");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "Email in use" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
    });
    return res
      .status(201)
      .json({ email: newUser.email, subscription: "starter" });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
