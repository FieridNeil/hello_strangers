const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ status: "HIT" });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
