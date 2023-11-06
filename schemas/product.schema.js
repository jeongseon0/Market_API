const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('productsSchema', productsSchema);