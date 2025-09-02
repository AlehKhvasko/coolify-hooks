const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("CI CD private #1");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
