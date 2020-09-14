const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const signup = require("./signup");
const login = require("./login");

app.use("/signup", signup);
app.use("/login", login);

app.get("/", (req, res) => {
  res.json({ status: "HIT" });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
