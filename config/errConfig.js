/**
 * Author: Zerone
 * Created on 2018-05-21 10:31
 */

const errCode = {
  'SUCCESS': 1, // 成功
  'FAIL': 0,  // 失败
  'ADD_FAIL': -1, // 添加失败
  'DELETE_FAIL': -2,  // 删除失败
  'UPDATE_FAIL': -3,  // 更新失败
  'FIND_FAIL': -4,  // 查找失败
  'DATA_NULL': -5,  // 数据不能为空
  'Q_NOT_FIND': -6, // 题目没找到
  'P_NOT_FIND': -7, // 试卷没找到
  'T_NOT_FIND': -8, // 教师没找到
  'U_NOT_FIND': -9, // 用户没找到
  'LOGIN_FAIL': -10, // 登录失败
  'LOGIN_ERR': -11, // 登录错误
  'PARAMS_ERR': -12,  // 参数错误
  'USER_EXIST': -13, // 用户已存在
  'DATE_BEFORE': -14, // 考试时间还没到
  'EXAME_SUBMIT': -15, // 试卷已提交
  'LOGIN_TIMEOUT': -16, // 登录失效
  'COUNT_FAIL': -17, // 计数失败
  'QUESTION_NOT_ENOUGH0': -18, // 试题数量不足
  'INTERVIEW_EXIST': -20,// 面试者已存在
  'T_SUB_ERR':-21
};
const errMsg = {
  'SUCCESS': "成功",
  'FAIL': '失败',
  'ADD_FAIL': "添加失败",
  'DELETE_FAIL': "删除失败",
  'UPDATE_FAIL': "修改失败",
  'FIND_FAIL': "查找失败",
  'SYSTEM_ERR':"强制提交失效，请手动刷新后提交",
  'DATA_NULL': "数据不能为空",
  'Q_NOT_FIND': '没找到题目',
  'P_NOT_FIND': '没找到试卷',
  'T_NOT_FIND': '没找到该老师',
  "LOGIN_FAIL": '当前没有登录，请登录',
  'LOGIN_ERR': '登录失败，请重试',
  "PARAMS_ERR": '参数错误',
  "U_NOT_FIND": "没找到当前用户",
  'USER_EXIST': '用户已存在',
  'DATE_BEFORE': '考试时间还没到！',
  'EXAME_SUBMIT': '试卷已提交',
  'SUBMIT_ERR':'提交失败',
  'LOGIN_TIMEOUT': '登录已失效，重新登录',
  'COUNT_FAIL': '计数失败',
  'QUESTION_NOT_ENOUGH0': '试题数量不足',
  'INTERVIEW_EXIST': '面试者手机号码已存在，请确认后重新输入',
  'T_SUB_ERR':'提交分数大于试卷总分，请重新打分'
};

module.exports = function (status,result=null, count=null) {
  return result!==null ?
    ( count ?
      {resCode: errCode[status],resMsg: errMsg[status],result: result, count: count, date: new Date()}
      : {resCode: errCode[status],resMsg: errMsg[status],result: result, date: new Date()})
    : {resCode: errCode[status],resMsg: errMsg[status], date: new Date()};
};
