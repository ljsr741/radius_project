function time(n){n=n||window.event,n.preventDefault?n.preventDefault():n.returnValue=!1,0==wait?(n.removeAttribute("disabled"),n.value="获取验证码",wait=60):(n.setAttribute("disabled",!0),n.value="重新发送("+wait+")",wait--,setTimeout(function(){time(n)},1e3))}$(window).on("keyup",function(){var n=$("#input").val(),t=$("#password").val(),e=/^1\d{10}$/;""!=n&&e.test(n)&&t.length>=6&&$("#btnlogin").on("tap",function(){setTimeout("window.location.href = '../index/index.html'",1500)}).css("background","#ea5404")});var $reg=$("#reg_bt");$reg.on("tap",function(){window.location.href="../login/register.html"});var $registerPull=$("#broker"),$registerUl=$(".register_ul");$registerUl.find(".register_li").on("tap",function(){var n=$(this),t=(n.parent(".register_pull"),n.text()),e=n.data("val");$registerPull.text(t).data("val",e),$(".register_pull").css("display","none")}),$registerPull.on("tap",function(){"none"==$(".register_pull").css("display")?$(".register_pull").css("display","block"):$(".register_pull").css("display","none")}),$icon_return=$("#icon_return"),$icon_return.on("tap",function(){window.location.href="../login/login.html"});var wait=60,$send_code=$("#send_code");$send_code.on("tap",function(){time(this)});var $forget_pass=$("#forget_pass");$forget_pass.on("tap",function(){window.location.href="../login/password.html"});var $icon_pass=$("#icon_pass");$icon_pass.on("tap",function(){window.location.href="../login/login.html"}),$(window).on("keyup",function(){var n=$("#acontnum").val(),t=$("#codenum").val(),e=$("#loginnum").val(),i=$("#loginsnum").val(),o=/^1\d{10}$/;""!=n&&o.test(n)&&e.length>=6&&e==i&&""!=t&&$("#btnlogin").on("tap",function(){setTimeout("window.location.href = '../index/index.html'",1500)}).css("background","#ea5404")});