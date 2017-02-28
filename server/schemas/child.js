const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  profile: {
    phone: { type: String }
  }
});

module.exports = childSchema;