const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

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
