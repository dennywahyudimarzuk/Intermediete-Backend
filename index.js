
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./src/Routes/Users");
const authRoutes = require("./src/Routes/Auth");
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/auth', authRoutes)

app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`server running on port ${process.env.DEFAULT_PORT}`);
});
