require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  res.status(200).send({ method: "GET" });
});

app.listen(PORT, () => console.log(`LISTENING::${PORT}`));
