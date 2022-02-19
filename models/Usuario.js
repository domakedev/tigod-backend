const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  isAuth: {
    type: Boolean,
    default: false,
  },
  vocation: {
    type: String,
  },
  workPlaces: {
    type: Array,
  },
  chatUsername: {
    type: String,
  },
  chatUserSecret: {
    type: String,
  },
});

module.exports = mongoose.model("Usuario", UserSchema);
