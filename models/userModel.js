const mongoose = require("mongoose");

//User Schema is the data structure of collection in the mongodb database
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    DoB: {type: Date , required: true },
    gender: { type:String, required: true },
    category: { type: String, required: true },
    email: {type:String, required: true, index: true, unique: true },
    phone: { type: Number, required: true , unique:true},
    kinName: { type: String, required: true },
    kinPhone: { type: Number, required: true },
    relationship: { type: String, required: true },
    address:{ type: String, required: true },
    password: { type: String, required: true, min:8},
  },
  {timestamps: true},
  { collection: "users" }
);
// Create a collection in mongodb called user based on the field or properties in userSchema
const User = mongoose.model("user", userSchema);

module.exports = User;
