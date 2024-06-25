const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongoDbPractice")


const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    username: String,
    email : String
})

module.exports =  mongoose.model("user", UserSchema);


