//引入path内置模块
var path=require('path')
//引入express依赖模块，用来启动静态服务器
var express=require('express')


//实例express
var app=express();

console.log(__dirname);
var viewsPath=path.join(__dirname,'views');
console.log(viewsPath);
//拼接物理路径用来指定虚拟路径的访问（静态页面文件）

//指定访问页面的路径
app.use('/',express.static(viewsPath));


//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath=path.join(__dirname,'public');
console.log(publicPath)
app.use('/public',express.static(publicPath));

//定义一个接口
app.get('/login',function(req,res){
	res.send('ha ha ha');
});

//监听端口9999，用来启动服务
app.listen(9999,function(){
	console.log('server run at port 9999')
});

//模块导出
module.exports=app;