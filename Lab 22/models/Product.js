const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    maxlength: [100, 'Product name cannot exceed 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price for the product'],
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category for the product'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  stock: {
    type: Number,
    required: [true, 'Please specify the stock'],
    min: [0, 'Stock cannot be negative'],
  },
  brand: {
    type: String,
    required: [true, 'Please specify the brand'],
  },
  warranty: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
