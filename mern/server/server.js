const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = 8000;
app.use(cors());
app.use(express.json());

// app.use(require("./routes/record"));
// app.use(require("./routes/guest"));

// get driver connection
const dbo = require("./db/conn");
const dbu= require("./schema/users");
const dbf= require("./schema/flights");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

//TEST
const flightRoutes = require("./routes/record");
const userRoutes = require("./routes/guest");
app.use('/record', flightRoutes);
app.use('/guest', userRoutes);