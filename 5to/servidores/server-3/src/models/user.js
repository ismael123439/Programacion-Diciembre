const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type : String,
        Required : true
    },
    email:{
        type : String,
        Required : true
    },
    age:{
        type : Number,
        Required : true
    }
});

module.exports = mongoose.model('user',userSchema);