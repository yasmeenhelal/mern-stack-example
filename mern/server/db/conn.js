const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
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

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/AirlineReservation', {useNewUrlParser: true});