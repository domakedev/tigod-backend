const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    trim: true,
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
});

module.exports = mongoose.model("Estudiante", StudentSchema);
