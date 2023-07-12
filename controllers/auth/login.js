const bcrypt = require("bcrypt");
const User = require("../../models/users/index");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email or password is wrong" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(401).json({ message: "Email or password is wrong" });
    }
    const token = "jkhdvsgaviuebwshiueshviuuihreu";
    res.json({
      token,
      user: {
        email: user.email,
        subscription: "starter",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
