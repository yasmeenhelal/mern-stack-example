const mongoose= require('mongoose');


const flightSchema= new mongoose.Schema({
From: {
    type:String,
    required:true
},

To: {
    type:String,
    required=true
},
FlightDate: {
    type: Date,
    required:true
},

Cabin: {
    type: String,
    required:true
},

SeatsAvailable: {
    type: Integer,
    required:true
},

FlightNumber: {
    type: String,
    required:false
},

ArrivalTime: {
    type: Time,
    required:false
},

EconomySeats: {
    type: Integer,
    required:false
},

BusinessSeats: {
    type: Integer,
    required:false
},

Airport: {
    type: String,
    required:false
}
})
const flight=new mongoose.model("FLIGHT",flightSchema);
module.exports= flight;
