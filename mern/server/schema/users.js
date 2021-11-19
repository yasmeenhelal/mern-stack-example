const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://Administrator:12345@cluster0.o88du.mongodb.net/AirlineReservation?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('erro',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("success")
const userSchema= new mongoose.Schema({
Username: {
    type:String,
    required:true
},

Password: {
    type:String,
    required:true
}
})
const yaso = new mongoose.model("yaso",userSchema);

var userse = [{
Username:"a",
Password:"123"
},{Username:"a",
Password:"123"}];

yaso.collection.insert(userse,function(err,docs){
    if(err){
        return console.error(err);
    }
    else{
      console.log("Multiple documents inserted")
    }
})

})
