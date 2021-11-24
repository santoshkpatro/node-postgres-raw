const express = require("express");
const UserRepo = require("../repos/user-repo");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UserRepo.find();

  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.findById(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("Unable to get user");
  }
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;

  const user = await UserRepo.insert(username, bio);

  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UserRepo.update(id, username, bio);

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.delete(id);

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

module.exports = router;
