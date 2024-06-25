const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mongoDbPractice");


const salesSchema = mongoose.Schema({
    day: String, 
    price: Number,
    sailer: String,
    profit : Number
})

module.exports =  mongoose.model("sale", salesSchema);



