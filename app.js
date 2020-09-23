const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const cors = require("cors");

// Strategies
const { localStrategy, jwtStrategy } = require("./middleware/passport");

// DB
const db = require("./db");
const { Action } = require("./db/models");

//Routes
const userRoutes = require("./routes/users");
const childroutes = require("./routes/children");
const actionRoutes = require("./routes/actions");
const messageRoutes = require("./routes/messages");

//Create Express App instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routers
app.use("/actions", actionRoutes);
app.use("/messages", messageRoutes);
app.use("/children", childroutes);
app.use("/media", express.static(path.join(__dirname, "media")));
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
    await db.sync({ force: true });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("This cool app is running on localhost:8000");
  });
};

run();
