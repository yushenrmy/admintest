// 引入http模块 require 加载
var http=require("http");
console.log(http);

// 创建服务器 creatServer 创建服务器    req->request 请求   res->response 响应
var server=http.createServer(function(req,res){
    console.log("hello node");
    // 设置响应头（解决乱码） 状态码status  文本类型 text/plain image/jpeg   编码utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 结束响应
    res.end("已结束");
})

// 监听端口
server.listen(3000);

// 后台：只要改动代码就要重新启动