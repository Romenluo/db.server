const Student = require('../entity/student');
const helper = require('../util/helpper');
const status = require('../config/errConfig');
exports.getRequest = async (request,response)=>{
  let student = {
    userId:'123456',
    userName: 'luomen'
  }
  let aa = await helper.findAll(Student);
  console.log('*******************');
  console.log(aa);
  response.json(aa)
}
