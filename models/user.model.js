const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fistName:{
        type:String,
        require: true
    },
    lastName:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;