import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("ok");
  return res.send("ok");
});

app.listen(3333, () => console.log("Servidor iniciado! 🚀"));
