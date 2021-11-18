const mongoose= require('mongoose');


const userSchema= new mongoose.Schema({
Username: {
    type:String,
    required:true
},

Password: {
    type:String,
    required=true
}

})
const users = new mongoose.model("USER",userSchema);
module.exports= users;
