var $radioList=$('.radio_box .radio_block');
$radioList.on('tap',function(){
	var $self=$(this);
	if(!$self.hasClass('selected')){
		$radioList.removeClass('selected');
		$self.addClass('selected');
	}//else{
	//	$self.removeClass('selected')
	//}

});

var $selectTitle=$('.select_title');
var $selectList=$('.select_list');
$selectTitle.on('tap',function(){
	$(this ).siblings('.select_list' ).toggle();
});
$selectList.find('.select_li').on('tap',function(){
	var $self=$(this);
	var $parent=$self.parent('.select_list')
	var text=$self.text();
	var val=$self.data('val');
	$selectTitle.text(text ).data('val',val);
	$parent.hide();
})