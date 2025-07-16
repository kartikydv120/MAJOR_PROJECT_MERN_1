const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

// we dont need to define the username and password becoz the 
// passportLocalSchema will bydefault add the username and the 
// hashed password and the salt value .
// whenever the schema is created for the database it will automatically 
// have the hashed password and the username by using passport