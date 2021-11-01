const express = require("express");
const router = express.Router();
const db = require("../models");

express().use(express.json());
express().use(express.urlencoded({ extended: true }));

router.get("/all", async (req, res) => {
  await db.ExerciseLog.findAll().then((exercise) => {
    console.log(exercise);
    res.status(200).send(exercise);
  });
});

router.post("/new", async (req, res) => {
  await db.ExerciseLog.create({
    user_id: req.body.user_id,
    description: req.body.description,
    duration: req.body.duration,
    exercise_date: req.body.exercise_date,
  }).then((submitted) => res.status(200).send(submitted));
});

module.exports = router;
