// Create the express router to handle our products requests
import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("On this call we show a list of products");
});

router.get("/:id", function (req, res) {
  res.send(`On this call we show a product of ${req.params.id}`);
});

router.post("/", function (req, res) {
  res.send(`On this call we create a product`);
});

router.put("/:id", function (req, res) {
  res.send("On this call we update a product");
});

router.delete("/:id", function (req, res) {
  res.send("On this call we delete a product");
});

export default router;