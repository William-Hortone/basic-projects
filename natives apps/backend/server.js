const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandling");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(errorHandler);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT}!`)
);
