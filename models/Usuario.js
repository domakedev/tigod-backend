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
    default: "",
  },
  workPlaces: {
    type: Array,
    default: [],
  },
  chatUsername: {
    type: String,
  },
  chatUserSecret: {
    type: String,
  },
  profession: {
    type: String,
    default: "",
  },
  actualWorkPlace: {
    type: String,
    default: "",
  },
  universityInterestedIn: {
    type: Array,
    default: [],
  },
  goals: {
    type: Array,
    default: [],
  },
  qualities: {
    type: Array,
    default: [],
  },
  experiences: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Usuario", UserSchema);
