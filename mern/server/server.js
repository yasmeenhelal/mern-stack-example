const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
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

// let express = require('express');
// let mongoose = require('mongoose');
// let cors = require('cors');
// let bodyParser = require('body-parser');
// let database = require('./database/db');


// const userRoute = require('../server/routes/flights.routes')


// mongoose.Promise = global.Promise;
// mongoose.connect(database.db, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Database connected sucessfully !')
// },
//     error => {
//         console.log('Database could not be connected : ' + error)
//     }
// )

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(cors());
// app.use('/flights', userRoute)


// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => {
//     console.log('Connected to port ' + port)
// })

// // Error Handling
// app.use((req, res, next) => {
//     next(createError(404));
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });