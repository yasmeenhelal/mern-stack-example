// import flightSchema from "./schema/flights";
// import userSchema from "./schema/users";

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

const flightSchema = require('./schema/flights');
const userSchema = require('./schema/users');

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("AirlineReservation");
        console.log("Successfully connected to MongoDB."); 
      }
      
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};
