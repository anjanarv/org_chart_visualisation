const express = require("express");
const app = express();

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

app.get("/", async (req, res, next) => {
  res.render("index", { title: "ejs" });
});

app.listen(5000);

module.exports = app;
