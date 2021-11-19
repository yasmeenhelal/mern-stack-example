const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://Administrator:12345@cluster0.o88du.mongodb.net/AirlineReservation?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('erro',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("success")

const flightSchema= new mongoose.Schema({
From: {
    type:String,
    required:true
},

To: {
    type:String,
    required:true
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
    type: String,
    required:true
},

FlightNumber: {
    type: String,
    required:false
},

ArrivalTime: {
    type: String,
    required:false
},

EconomySeats: {
    type: String,
    required:false
},

BusinessSeats: {
    type: String,
    required:false
},

Airport: {
    type: String,
    required:false
}
})
const flight=new mongoose.model("seifoo",flightSchema);
var flightss = [{
    From:"LAX",
    To:"LUV",
    FlightDate:"12-1-2022",
    Cabin:"Business",
    SeatsAvailable:"23"
    },{From:"LAX",
    To:"LUV",
    FlightDate:'12-1-2022',
    Cabin:"Business",
    SeatsAvailable:"23"}];
    
    flight.collection.insert(flightss,function(err,docs){
        if(err){
            return console.error(err);
        }
        else{
          console.log("Multiple documents inserted")
        }
    })
    
    })
    
