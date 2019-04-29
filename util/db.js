const mongoose = require('mongoose');
const {db} = require('../config/config');
mongoose.Promise = Promise;

const mongodb = mongoose.createConnection(db.uri,db.opt);

mongodb.once('open',(err) => {
  if(err){
    console.log(new Date() + ' 数据库连接失败！');
    console.log(err);
    return;
  }else {
    console.log(new Date() + ' 数据库连接成功！');
  }
});

module.exports = mongodb;
