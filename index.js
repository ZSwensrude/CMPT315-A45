// Code adapted from https://github.com/mrchenliang/learning-node

import express from "express";
import connectDB from "./database/monsterDB.js";
import bodyParser from 'body-parser';
import router from "./routes/monsterRoute.js";

const app = express();
const port = 3000;

connectDB();

// allows app to deal with url encoded and json requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set to use the monsters router if at /monsters
app.use('/monsters', router);

// Not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that! Go to /monsters to interact with database");
});
  
// Error
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});
  