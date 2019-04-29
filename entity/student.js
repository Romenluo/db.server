const mongoose = require('mongoose');
const db = require('../util/db');

const Schem = mongoose.Schema;
let studentSchema = new Schem({
  userId:String,
  userName:String
})

module.exports = db.model('Student',studentSchema);
