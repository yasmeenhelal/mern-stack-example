const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
var record = require("../schema/flights");
const router = express();


//Test
router.post('http://localhost:3000/record/createflight', (req, res)=>{
  let flight1 ={
      From:"LAX",
      To:"JFK",
      FlightDate:"12-1-2022",
      Cabin:"Economy",
      SeatsAvailable:"20"
    }

    record.create(flight1).then(function(userdata){
      res.send(userdata)
  })
})

console.log("FLIGHT ADDED");

router.get('/test', (req, res)=>{
  res.send("test")
})

module.exports = router;

// a list of all the available flights.
recordRoutes.route("/records").get(function (req, res) {
  let db_connect = dbo.getDb("AirlineReservation");
  db_connect
    .collection("flights")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//show a single record by id
recordRoutes.route("/records/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("flights")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//a single record by ...
recordRoutes.route("/records/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {};
  db_connect
      .collection("flights")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

//create a new record.
recordRoutes.route("/records/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
  };
  db_connect.collection("flights").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
    },
  };
  db_connect
    .collection("flights")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});


//update a record by .
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = {};
  let newvalues = {
    $set: {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
    },
  };
  db_connect
    .collection("flights")
    .updateMany(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res.result.nModified + " document(s) updated");
      response.json(res);
    });
});


//delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("flights").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = recordRoutes;
