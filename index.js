const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("src"));
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/public/index.html");
});

app.listen(port, () => {
  console.log(`Web is running`);
});