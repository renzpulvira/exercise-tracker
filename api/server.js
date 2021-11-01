require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const Sequelize = require("sequelize");
const db = require("./models");
const config = require("./config/config.json");
const dbModel = require("./models");
const userRoutes = require("./routes/user.routes");
const exerciseLogRoutes = require("./routes/exerciselogs.routes");

const seq = new Sequelize("exercise_db", "root", "", {
  host: "localhost",
  dialect: config.development.dialect,
});

app.use("/api/users", userRoutes);
app.use("/api/exercise", exerciseLogRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`LISTENING::${PORT}`));
});

// app.listen(PORT, () => console.log(`LISTENING::${PORT}`));
