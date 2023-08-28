const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const blogRouter = require("./routers/blogRouter");
const adminRouter = require("./routers/adminRouter");
const staticRouter = require("./routers/staticRouter");
const cookieParser = require("cookie-parser");
const { checkForToken } = require("./middlewares/auth");
const log = require("./utils/log");

const app = express(); // Setup express app

// Setup Connection to DB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.info("\x1b[36m Mongo DB connected Successfully \x1b[0m"))
  .catch((error) => console.log("\x1b[31m", error, "\x1b[0m"));

// Configeration
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middleware
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForToken);

// Register Routes
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/admin", adminRouter);
app.use("/", staticRouter);

// Listener
app.listen(8080, () => {
  console.log("\x1b[36m Server is running at PORT:8080 \x1b[0m");
  log(new Error("Server Port Running 8080"));
});
