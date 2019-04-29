const Student = require('../entity/student');
const helper = require('../util/helpper');
exports.getRequest = async (request,response)=>{
  let student = {
    userId:'123456',
    userName: 'luomen'
  }

  let aa = helper.add(Student,student);
  console.log(aa);
  response.json(student)
}
