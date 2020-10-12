const db = require("../Helpers/db");

const usersModel = {
  //GET
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },

  //DELETE
  deleteUser: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id = ${id}`, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },

  //POST
  postUser: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", body, (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(err);
      });
    });
  },
};


module.exports = usersModel;
