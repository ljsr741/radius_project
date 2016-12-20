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
});

var $areaList=$('.area_cell');
$areaList.on('tap',function(){
	var $self=$(this);
	if(!$self.hasClass('selected')){
		$areaList.removeClass('selected');
		$self.addClass('selected');
	}//else{
	//	$self.removeClass('selected')
	//}

});
var $relese=$('#btn_relese');
$relese.on('tap',function(){
	window.location.href='../component/component_confirm.html'
});

var $delete=$('.txt_delete');
$delete.on('tap',function(){
	window.location.href='../component/component_delete.html'
});

var $add=$('.btn_add');
$add.on('tap',function(){
	window.location.href='../component/component_estate.html'
});


var $drop=$('.delete_text');
$drop.on('tap',function(){
	window.location.href='../component/component_drop.html'
});
