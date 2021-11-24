const express = require("express");
const UserRouter = require("./routes/users");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(UserRouter);

  return app;
};
