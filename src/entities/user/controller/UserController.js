const UserController = {
  test: async (req, res) => {
    try {
      res.status(200).send("funciona");
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = UserController;
