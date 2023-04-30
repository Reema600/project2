// step 1
const exprees = require("express");
// step 2
const app = exprees();
// step 4
app.get("/name", function (req, res) {
  res.send("Welcome Reema kk");
});
// step 3
app.listen(3300, function () {
  console.log("listening");
});
