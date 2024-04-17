const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

app.get("/api", (reg, res) => {
  res.json({
    messages: ["text 1", "text 2", "text 3"],
  });
});

app.post("/send", (reg, res) => {
  const data = reg.body;
  console.log(data.name);
  console.log(data.time);
  console.log(data.content);
});

const messages = [
  {
    name: "sistem",
    time: "9:00",
    content: "Добро пожаловать в чат",
  },
];
