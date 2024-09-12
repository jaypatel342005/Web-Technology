const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please add an ID'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  age: {
    type: Number,
    required: [true, 'Please add the age']
  },
  major: {
    type: String,
    required: [true, 'Please add the major']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please add a phone number']
  },
});

module.exports = mongoose.model('Student', StudentSchema);
