// 引入http模块 require 加载
var http=require("http")

// 创建服务器 creatServer 创建服务器
var server=http.createServer(function(req,res){
    // 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // req.url 获取地址栏中的路径
    console.log(req.url)

    // switch判断
    // switch(req.url){
    //     case "/red":
    //         // res.write写入
    //         res.write("red");
    //         break;
    //     default:
    //         res.write("默认")
    // }

    // if条件判断
    if(req.url=="/red"){
        res.write("red")
    }else{
        res.write("我是默认的")
    }
    res.end()
})
server.listen(3000)