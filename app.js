const express = require("express");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const cors = require("cors");

const bodyParser = require("body-parser");
const path = require("path");

//routes
const userRoutes = require("./routes/users");
const childroutes = require("./routes/childs");
const messageRoutes = require("./routes/messages");
const notificationRoutes = require("./routes/notifications");

//create express instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

//db
const db = require("./db");
const { Message } = require("./db/models");

// routers
app.use("/messages", messageRoutes);
app.use("/childRequest", notificationRoutes);
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
