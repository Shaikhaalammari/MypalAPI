const express = require("express");
//cors
const cors = require("cors");

const bodyParser = require("body-parser");
const path = require("path");
//DB
const db = require("./db");
//passport
const passport = require("passport");
//local startegy
const { localStrategy, jwtStrategy } = require("./middleware/passport");
//bodyparser
const bodyParser = require("body-parser");
//routes
const userRoutes = require("./routes/users");
const childroutes = require("./routes/childs");


//create express instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

//db
const db = require("./db");
const { Message } = require("./db/models");

//routes
const messageRoutes = require("./routes/messages");

// routers
app.use("/messages", messageRoutes);
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(userRoutes);
app.use("/children", childroutes);

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
