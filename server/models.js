const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const parentSchema = require('./schemas/parent');
const childSchema = require('./schemas/child');

const GITHUB_ISSUE = `discriminator-virtual-bug`;

module.exports = function createDb() {
  const db = mongoose.createConnection(`mongodb://localhost:27017/${ GITHUB_ISSUE }`);
  
  const Parent = db.model('Parent', parentSchema);

  const Child = Parent.discriminator('Child', childSchema);

  return { Parent, Child };
}

