// models/Faculty.js
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  officeLocation: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  },
  courses: [String]
});

module.exports = mongoose.model('Faculty', facultySchema);
