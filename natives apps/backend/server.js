const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandling");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const countryRouter = require("./routes/country");
const placeRouter = require("./routes/place");
const hotelRouter = require("./routes/hotel");

const port = 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(errorHandler);

app.use("/api/", authRouter);
app.use("/api/users/", userRouter);
app.use("/api/", countryRouter);
app.use("/api/", placeRouter);
app.use("/api/", hotelRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT}!`)
);
