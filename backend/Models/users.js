const mongoose = require("mongoose")

// schema for user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

// create a userModel
const userModel = mongoose.model("users", userSchema);

// export the model
module.exports = userModel;
