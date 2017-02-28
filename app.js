
const mongoose = require('mongoose');
const parentSchema = require('./server/schemas/parent');
const childSchema = require('./server/schemas/child');

test();

function test() {
  const parentDoc = new mongoose.Document({
    profile: {
      name: { first: 'Parent', last: 'Doc' },
      email: 'parent@test.com'
    }
  }, parentSchema);
  console.log(`Parent Doc fullname: ${ parentDoc.fullName }`);

  const childDoc = new mongoose.Document({
    profile: {
      name: { first: 'Child', last: 'Doc' },
      email: 'child@test.com'
    }
  }, childSchema); 
  console.log(`Child doc fullname: ${ childDoc.fullName }`);
}