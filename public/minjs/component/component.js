var $radioList=$(".radio_box .radio_block");$radioList.on("tap",function(){var t=$(this);t.hasClass("selected")||($radioList.removeClass("selected"),t.addClass("selected"))});var $selectTitle=$(".select_title"),$selectList=$(".select_list");$selectTitle.on("tap",function(){$(this).siblings(".select_list").toggle()}),$selectList.find(".select_li").on("tap",function(){var t=$(this),e=t.parent(".select_list"),s=t.text(),l=t.data("val");$selectTitle.text(s).data("val",l),e.hide()});