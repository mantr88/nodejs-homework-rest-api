const bcrypt = require("bcrypt");

const User = require("../../models/users/index");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "Email in use" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });
    return res
      .status(201)
      .json({ email: newUser.email, subscription: "starter" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = register;
