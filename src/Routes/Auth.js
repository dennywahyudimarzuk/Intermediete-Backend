const authRoutes = require("express").Router();
const authController = require("../Controller/Auth");

authRoutes.post("/register", authController.register);
authRoutes.get("/login", authController.login);

module.exports = authRoutes;
