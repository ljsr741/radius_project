//账号密码验证
$(window).on("keyup",function(){
	var e=$('#input' ).val();
	var pass=$('#password').val();
	var reg=/^1\d{10}$/;
	if(e!=''&&reg.test(e)&&pass.length>=6){
		$("#btnlogin" ).on('tap',function(){
			setTimeout("window.location.href = '../../msg/msg_info_data.html'",1500)
		} ).css('background','#ea5404')
	}
});
var $reg=$('#reg_bt');
$reg.on('tap',function(){
	window.location.href='../login/register.html'
});


//下拉菜单
var $registerPull=$('#broker');
var $registerUl=$('.register_ul');
//$registerPull.on('tap',function(){
//	$(this ).siblings('#broker' ).toggle();
//});
$registerUl.find('.register_li').on('tap',function(){
	var $self=$(this);
	var $parent=$self.parent('.register_pull');
	var text=$self.text();
	var val=$self.data('val');
	$registerPull.text(text ).data('val',val);
	$('.register_pull').css("display","none")
});
$registerPull.on("tap",function(){
	if($('.register_pull').css("display")=="none")
	{
		$('.register_pull').css("display","block")
	}
	else{
		$('.register_pull').css("display","none")
	}
});

//注册页面跳转到登录页面
$icon_return=$('#icon_return');
$icon_return.on('tap',function(){
	window.location.href='../login/login.html'
});


//发送验证码
var wait=60;
function time(event){
	event = event||window.event;
	event.preventDefault?event.preventDefault():event.returnValue=false;
	if(wait==0){
		event.removeAttribute("disabled");
		event.value="获取验证码";
		//console.log(event.value)
		wait = 60;
	}else{
		event.setAttribute("disabled",true);
		event.value = "重新发送("+wait+")";
		wait--;
		setTimeout(function(){
			time(event);
		},1000)
	}
}
var $send_code=$('#send_code');
$send_code.on('tap',function(){
	$send_code.css("background","gray")
	time(this);
});
//var send_code=document.getElementById("send_code")
//send_code.onclick=(function(){time(this);})

//跳转忘记密码页面
var $forget_pass=$('#forget_pass');
$forget_pass.on('tap',function(){
	window.location.href='../login/password.html'
});
var $icon_pass=$('#icon_pass');
$icon_pass.on('tap',function(){
	window.location.href='../login/login.html'
});


//注册页面验证
$(window).on("keyup",function(){
	var acont=$('#acontnum' ).val();
	var codenum=$('#codenum').val();
	var loginnum=$('#loginnum').val();
	var loginsnum=$('#loginsnum').val();
	var identity=$('#identity' ).val();
	var reg=/^1\d{10}$/;
	if(acont!=''&&reg.test(acont)&&loginnum.length>=6&&
	   loginnum==loginsnum&&codenum!=''&&codenum!='identity'){
		$("#btn_load" ).on('tap',function(){
			setTimeout("window.location.href = '../index/index.html'",1500)
		} ).css('background','#ea5404');
		$(".btn_sure" ).on('tap',function(){
			setTimeout("window.location.href = '../../login/login.html'",1500)
		} ).css('background','#ea5404');
	}
});

//var $reg=$('#reg_bt');
//$reg.on('tap',function(){
//	window.location.href='../login/register.html'
//});

//返回未登陆页面
var $load_jump=$('#load_jump');
$load_jump.on('tap',function(){
	window.location.href = '../../info/info.html'
});


