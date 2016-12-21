
$(window).on("keyup",function(){
	var e=$('#input' ).val();
	var pass=$('#password').val();
	var reg=/^1\d{10}$/;
	if(e!=''&&reg.test(e)&&pass.length>=6){
		$("#btnlogin" ).on('tap',function(){
			setTimeout("window.location.href = '../index/index.html'",1500)
		} ).css('background','#ea5404')
	}
});
var $reg=$('#reg_bt');
$reg.on('tap',function(){
	window.location.href='../login/register.html'
});


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

$icon_return=$('#icon_return');
$icon_return.on('tap',function(){
	window.location.href='../login/login.html'
});



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
//var $send_code=$('#send_code');
//$send_code.on=('tap',function(){
//	time(this);
//});
var send_code=document.getElementById("send_code")
send_code.onclick=function(){time(this);}
