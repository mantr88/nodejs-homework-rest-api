const getCurrent = async (req, res) => {
  try {
    const { email, subscription } = req.user;

    res.status(200).json({ email, subscription });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCurrent;
