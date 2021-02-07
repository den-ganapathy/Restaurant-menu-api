require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();

const uri = process.env.MONGO_URL;
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log("listening for request");
    })
  )
  .catch((err) => console.log(err));
app.use(bodyparser.json());
app.use("/api", require("./routes/api"));
