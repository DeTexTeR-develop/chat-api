const express = require('express');
const logger  = require('morgan');
const cors    = require('cors');
const mongo = require('../config/mongo');

// routes

const indexRouter = require("../routes/index.js");
const userRouter = require("../routes/user.js");
const chatRoomRouter = require("../routes/chatRoom.js");
const deleteRouter = require("../routes/delete.js");

//middleware
const { decode } = require('../middleware/jwt');

const app = express();

/** Get port from environment and store in Express. */
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

//creating a http server
app.listen(3000, () => {
  console.log(`Listening on port:: http://localhost:${3000}/`)
});