// 引入express
let express = require("express");

// 创建app对象
let app = express();
let cors = require('cors');
let BodyParse = require('body-parser');
const { request, response } = require("express");

// 设置端口
let port = process.env.PORT || 5000;

// 添加中间件
app.use(cors());
app.use(BodyParse.json());
app.use(BodyParse.urlencoded({extended: true}));

// 设置监听
app.listen(port, ()=>{
     console.log(`服务跑在${port}端口`);
})
     
// 一个最简单的api接口
// 示例请求用的get方法
app.get('/usr/login',(request,response)=>{
     console.log('黄子涵')
     response.send('你好呀，黄子涵')
})

//设置路由
app.get('/',(req,res)=>{
         res.send("黄子涵");
})

