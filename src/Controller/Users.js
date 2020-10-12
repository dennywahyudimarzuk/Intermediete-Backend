const usersModel = require("../Models/Users");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllUsers: (req, res) => {
    usersModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteUser: (req, res) => {
    const {id} = req.params
    usersModel
    .deleteUser(id)
    .then((data) => formResponse(data, res, 200))
    .catch((err) => console.log(err));
  },

  postUser: (req, res) => {
    const { name, password, email } = req.body
    if (name && password && email) {
      let body = {name, password, email}
      usersModel
        .postUser(body)
        .then((data) => formResponse(data, res, 200))
        .catch((err) => console.log(err));
    } else {
      formResponse(res, 401, "fill all fields")
      }
  },
};
