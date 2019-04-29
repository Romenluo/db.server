
const errCode = {
  'SUCCESS': 1, // 成功
  'FAIL': 0,  // 失败
};
const errMsg = {
  'SUCCESS': "成功",
  'FAIL': '失败'
};

module.exports = function (status,result=null, count=null) {
  return result!==null ?
    ( count ?
      {resCode: errCode[status],resMsg: errMsg[status],result: result, count: count, date: new Date()}
      : {resCode: errCode[status],resMsg: errMsg[status],result: result, date: new Date()})
    : {resCode: errCode[status],resMsg: errMsg[status], date: new Date()};
};
