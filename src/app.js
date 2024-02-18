import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.status(200).json({ msg: '"Hello World"' });
});

export default app;
