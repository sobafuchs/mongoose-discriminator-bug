const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  profile: {
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true }
    }
  },
  email: { type: String, required: true }
});

parentSchema.virtual('fullName').get(function() {
  return `${this.profile.name.first} ${this.profile.name.last}`;
});

module.exports = parentSchema;