var $move_us=$('#move_us');
$move_us.on('tap',function(){
	var $self=$(this);
	if(!$self.hasClass('active')){
		$move_us.removeClass('active');
		$self.addClass('active');
	}//else{
	//	$self.removeClass('selected')
	//}

});
