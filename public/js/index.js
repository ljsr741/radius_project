//$(document ).on('click','input',function(){
//
//});
"use strict"
var startX,
	startY,
	moveX,
	moveY;
var dom=document.getElementsByClassName('md')[0];

dom.addEventListener('touchstart',function(e){
		console.log('touchstart',e);
		//console.log(startX,startY,moveX,moveY)
		//times=0;
		//timeOut=setInterval(function(){
			//times+= 100;

		//},100);
		var th= e.touches[0];
		startX=th.clientX;
		startY=th.clientY;
	});

dom.addEventListener('touchmove',function(e){
		console.log('touchmove', e.touches[0]);
		//console.log(startX,startY,moveX,moveY)
		var th= e.touches[0];
		moveX=th.clientX;
		moveY=th.clientY;
	});
/*document.getElementsByClassName('md')[0]
	.addEventListener('touchend',function(e){
		console.log('touchend',e)


	});*/
dom.addEventListener('touchend',function(e){
	console.log('touchend')
	//console.log(startX,startY,moveX,moveY)
if(moveY-startY>=100){
	dom.style.color='red'
}else if(startY-moveY>=100){
	dom.style.color='#cecece'
}
	//var fontSize=document.getElementsByClassName('md')[0 ].style.fontSize;
	var fontSize=parseInt(window.getComputedStyle(document.getElementsByClassName('md')[0]).fontSize);
	console.log(fontSize)
	if(moveX-startX>=100){
		fontSize+=2;
		document.getElementsByClassName('md')[0 ].style.fontSize=fontSize+"px"
	//	dom.style.fontSize='50px'
	}else if(startX-moveX>=100){
		if(fontSize>=14){
			fontSize-=2;
			document.getElementsByClassName('md')[0 ].style.fontSize=fontSize+"px";
		}
		//dom.style.fontSize='30px'
	}
	//clearInterval(timeOut);
	//console.log(times);
	//if(times>=1000){
		//console.log("tap")
	//}
})

//
////创建一个xhr实例
//var xhr=new XMLHttpRequest();
//
////打开一个连接   请求方式，请求路径
//xhr.open('get','http://122.10.30.153:9900/index');
//
////发送请求
//xhr.send();
//
////监听状态变更
//xhr.onreadystatechange=function(){
//	if(xhr.state===200||xhr.readyState===4){
//		console.log('success',JSON.parse(xhr.response))
//	}
//}



$.ajax({
	url:'api/index',
   type:'get',
	dataType:'json',
	success:function(result){
	console.log('result',result)
},
complete:function(res){
	console.log('res',res)
}
})

