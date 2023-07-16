const User = require("../../models/users/index");

const logout = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });

    res.status(204).json({ message: "No Content" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = logout;
