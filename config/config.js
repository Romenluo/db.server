module.exports = {
  db:{
    uri: 'mongodb://127.0.0.1:27017/luo', // 数据库uri
    opt: {
      poolSize: 50, // 连接池大小
      auto_reconnect: true // 自动重连
    }
  },
  hostname:'127.0.0.1',
  port:'8088'
}
