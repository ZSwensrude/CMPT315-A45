// Create the express router to handle our home requests
import express from "express";

const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send("Welcome to our Site!");
});

export default router;
