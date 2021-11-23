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

const usercons = new mongoose.model("users",userSchema);

var u1 = [{
Username:"Adminitrator",
Password:"cfk89hJH221"
}];

usercons.collection.insertMany(u1,function(err,docs){
    if(err){
        return console.error(err);
    }
    else{
      console.log("User inserted")
    }
})

})
