// step 1
const exprees = require("express");
// step 2
const app = exprees();
//telling node js to use (ejs) as view engine
app.set("view engine", "ejs");
// step 4
app.get("/name", function (req, res) {
  res.send("Welcome Reema abdullah");
});

app.get("/testHtml", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

app.get("/hi", (req, res) => {
  const degree = 25;
  res.render("introToEjs.ejs", { num: degree });
});

// step 3
app.listen(3000, function () {
  console.log("listening");
});
