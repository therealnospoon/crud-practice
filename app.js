const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("An alligator approaches quietly this should be automatically updating!");
});

app.listen(3000, () => console.log("Gator app listening on port 3000!"));
