exports.add = async (model,params) => {
  let flag = await model.create(params).catch(err => {console.log(err);return false});
  console.log('add',flag);
  return flag;
};
