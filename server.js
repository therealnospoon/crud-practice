const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(
  "mongodb+srv://qudo-tim:1qudocreative@$@cluster0-acijh.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
