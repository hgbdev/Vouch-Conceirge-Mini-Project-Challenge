const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
//const logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const database = require("./database/mongo");

const indexRouter = require("./routes/index");

require("./database/model");
require("dotenv").config();

const app = express();

database.connect();

app.use(cors());
//app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/", "index.html"));
});

module.exports = app;
