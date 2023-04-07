const express = require("express");
const path = require("path");

let app = express();

const port = 3000;

app.set("views", path.join(__dirname,'/resources/views'));
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Express is running on port yz ${port}`);
});

