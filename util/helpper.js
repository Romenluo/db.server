const Status = require('./../config/errConfig');
/**
 * 增
 * @param model
 * @param params
 * @returns {Promise<{resCode: number, msg: string}>}
 */
exports.add = async (model,params) => {
  console.log('params',params);
  let flag = await model.create(params).catch(err => {console.log(err);return false});
  console.log('add',flag);
  return (!!flag)?Status('SUCCESS',flag):Status('ADD_FAIL');
};

exports.insertMany = async (model, arr) => {
  let res = await model.insertMany(arr).catch(err => 0);
  return res?Status('SUCCESS',res):Status('ADD_FAIL');
}
/**
 * 删
 * @param model
 * @param params
 * @returns {Promise<void>}
 */
exports.del = async (model, params) => {
  let flag = await model.remove(params).exec().catch(err => false);
  return (!!flag)?Status('SUCCESS'):Status('DELETE_FAIL');
};
/**
 * 改
 * @param model
 * @param oldParams
 * @param newParams
 * @returns {Promise<*>}
 */
exports.update = async (model, oldParams, newParams, opt=null) => {
  let res = await model.update(oldParams, newParams,opt).exec().catch(err => false);
  if(res){
    return res.n? Status('SUCCESS'):Status('UPDATE_FAIL');
  }else{
    return Status('UPDATE_FAIL');
  }
};
/**
 * 更新多条数据
 * @param model
 * @param params
 * @param doc
 * @param opt
 * @returns {Promise<*>}
 */
exports.updateMany = async (model, params, doc, opt=null) => {
  let res = await model.updateMany(params, doc,opt).exec().catch(err => false);
  if(res){
    return res.n? Status('SUCCESS'):Status('UPDATE_FAIL');
  }else{
    return Status('UPDATE_FAIL');
  }
};
/**
 * 更新一条记录
 * @param model
 * @param params
 * @param doc
 * @param opt
 * @returns {Promise<*>}
 */
exports.update_One = async (model, params, doc, opt=null) => {
  let query = model.findOneAndUpdate(params,doc,opt);
  let result = await query.exec().catch(err=>false);
  return result ? Status('SUCCESS'):Status('UPDATE_FAIL');
};
/**
 * 无条件查找
 * @param model
 * @returns {Promise<*>}
 */
exports.findAll = async (model) => {
  let query = model.find();
  let result = await query.exec().catch(err => false);
  console.log(result)
  return result ? Status('SUCCESS', result):Status('FIND_FAIL');
};
/**
 * 有条件查找一个
 * @param model
 * @param params
 * @param fields
 * @param opt
 * @returns {Promise<*>}
 */
exports.findOne = async (model,params,{fields=null,opt=null}={}) => {
  let query = model.findOne(params,fields,opt);
  let doc = await query.exec().catch(err => false);
  return doc? Status('SUCCESS', doc):Status('FIND_FAIL');
};
/**
 * 有条件查找
 * @param model
 * @param params
 * @param fields
 * @returns {Promise<*>}
 */
exports.findFilter = async (model, params, {fields=null, opt=null,sortBy=null}={}) => {
  let sorts = sortBy!=null? (sortBy.distinct? {'name':sortBy.desc?'-1':'1'} : {'_id':sortBy.desc?'-1':'1'}) : {'_id':-1};
  let query = model.find(params,fields,opt).sort(sorts);
  let result = await query.exec().catch(err => false);
  return result ? Status('SUCCESS', result):Status('FIND_FAIL');
};
/**
 * 关联查找
 * @param model
 * @param params
 * @param filter
 * @param refmodel 关联的字段
 * @returns {Promise<*>}
 */
exports.findPopulation = async (model, params, {path='', fields=null, opt=null, select=null, refmodel=null, match=null, refopt=null}={}) => {
  let query = model.find(params, fields, opt)
    .populate({path:path, select:select, model:refmodel, match:match, options:refopt});
  let result = await query.exec().catch(err => false);
  return result ? Status('SUCCESS', result):Status('FIND_FAIL');
};
/**
 * 计数
 * @param model
 * @param params
 * @returns {Promise<*>}
 */
exports.count = async (model, params) => {
  let result = await model.count(params).exec().catch(err=>0);
  return Status('SUCCESS', result);
};

exports.isArray = o => Object.prototype.toString.call(o) === '[object Array]';
exports.isExist = (o,p) => o.hasOwnProperty(p);
