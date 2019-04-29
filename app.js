const express = require('express');
const bodyParse = require('body-parser');
const logger = require('morgan');
const conf = require('./config/config');
//创建服务器
const server = express();

// 生成解析器
const urlencoded = bodyParse.urlencoded({ extends:true })

//中间件: 把请求体参数 存放到request.body
server.use(logger('dev')); //加载日志
server.use(bodyParse.json()); // 加载json解析中间件
server.use(urlencoded);
server.use('/app',require('./routers/api'));// 加载路由

server.listen(conf.port,conf.hostname,() => {
  console.log(`server running at ${conf.port}`);
});
