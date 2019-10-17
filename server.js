const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "html");
app.set("views", __dirname + "/public/views");

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

app.get("/", async (req, res, next) => {
  res.render("index", { title: "ejs" });
});

app.get("/report", async (req, res, next) => {
  res.render("report", { title: "ejs" });
});

app.listen(5000);

module.exports = app;
