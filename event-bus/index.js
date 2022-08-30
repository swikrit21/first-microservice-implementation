const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/event", async (req, res) => {
  const event = req.body;
  axios.post("http://localhost:4000/event", event);
  axios.post("http://localhost:4001/event", event);
  axios.post("http://localhost:4002/event", event);
  axios.post("http://localhost:4003/event", event);

  res.send({ status: "ok" });
});
app.listen(4005, () => {
  console.log("Listening to 4005");
});
