const express = require('express');
const router = express.Router();
const home = require('../container/home');


router.get('/get.do',home.getRequest);

router.post('/home.do',function (request,response) {
  let student = {
    name:'luo'
  }
  response.json(student);
});

module.exports = router;
