//引入path内置模块
var path=require('path');
//引入express依赖模块，用来启动静态服务器
var express=require('express');

var proxy=require('http-proxy-middleware');
//var nodegrass=require('nodegrass');
//定义验证接口
//var sha1 = require("sha1");

//var appID="wx697318a9305fc01f";
//var appsecret="cec0e63c4621c312e63afda7c6e55f7a";

//var accessTokenUrl="http://nodemodule.proxy.qqbrowser.cc/weixin"+appID+"&secret"+appsecret;


//实例express
var app=express();

////定义一个获取access_token的请求
//app.get('/token',function(req,res){
//	nodegrass.get(accessTokenUrl,function(){
//
//	})
//})
//
////创建自定义菜单
//app.get("/create",function(){
//
//})


//定义验证接口
app.use('/weixin', function(req, res){
	//获取get传递数据
	var obj = req.query;
	console.log("weixin", obj);
	//将数据添加到一个数组
	var arr = ["nodemodule", obj.timestamp, obj.nonce];
	//排序
	arr.sort();

	//拼接字符串，并进行 sha1 加密
	var str = sha1(arr.join(""));
	console.log('sha1   ', str);

	console.log('signature', obj.signature === str);
	//匹配是否是微信请求
	if( obj.signature === str){
		//成功返回 echostr 随机字符串
		res.send(obj.echostr).end();
	}else{
		res.send("验证失败").end();
	}
});




app.get('/login',function(rep,res){
	res.send('ha ha ha')
});

//定义通过/api访问的请求，转发到指定路径
app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
		'^/api':'/'
	}
}));


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
app.listen(16935,function(){
	console.log('server run at port 16935')
});

//模块导出
module.exports=app;