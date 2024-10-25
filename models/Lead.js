// src/models/Lead.js
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  campaign: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);
