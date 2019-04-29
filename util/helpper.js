const status = require('../config/errConfig');

exports.add = async (model,params) => {
  let flag = await model.create(params).catch(err => {console.log(err);return false});
  // console.log('add',flag);
  return (!!flag)?status('SUCCESS',flag):status('FAIL');
};
