const express = require("express");
//cors
const cors = require("cors");
//DB
const db = require("./db");
//passport
const passport = require("passport");
//local startegy
const { localStrategy } = require("./middleware/passport");
//bodyparser
const bodyParser = require("body-parser");
//routes
const userRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(localStrategy);
app.use(userRoutes);

//Not Found Paths
app.use((req, res, next) => {
  console.log(404);
  res.status(404).json("Path not found"); // when the path called is not exist
});

app.use((err, req, res, next) => {
  console.log(500);
  res.status(err.status || 500); // 500 y3ne backend error (notfound)
  res.json({
    message: err.message || "Internal Server Error",
  });
});
const run = async () => {
  try {
    await db.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("This cool app is running on localhost:8000");
  });
};

run();
