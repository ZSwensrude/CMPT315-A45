import express from "express";
import home from "./home.js";
import products from "./products.js";

const app = express();
const port = 3000;

// Routers
app.use("/", home);
app.use("/products", products);

// Not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
  
// Error
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});
  