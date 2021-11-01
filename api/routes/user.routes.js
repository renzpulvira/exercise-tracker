const express = require("express");
const router = express.Router();
const db = require("../models");

express().use(express.json());
express().use(express.urlencoded({ extended: true }));

router.get("/all", async (req, res) => {
  await db.User.findAll().then((users) => {
    console.log(users);
    res.status(200).send(users);
  });
});

router.post("/new", async (req, res) => {
  let date = new Date().getTime();
  await db.User.create({
    username: req.body.username,
    user_created: date,
  }).then((submitted) => res.status(200).send(submitted));
});

module.exports = router;
