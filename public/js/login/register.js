var $phone=$('#input' );
$phone.on('tap',function(){
	var e=$phone.value;
	console.log(e);
	var reg=/^1[34578]\d{9}$/;
	if(!reg.test(e)){
		alert("手机号码格式错误")
	}
});
