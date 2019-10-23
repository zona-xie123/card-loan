
$(function(){

	$('.icon-menu').on('click', function (e) {
		$('.menubar').toggleClass('active');
		e.preventDefault();
	})

	$('.menubar li').on('click', function(){
		$('.menubar').removeClass('active');
	})

	////偵測是否為ie
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
    	ms_ie = true;
    }
    if ( ms_ie ) {

    	//is_ie & ie9-
        if ($.browser.msie && parseInt($.browser.version, 10) <= 9) {	
				
		}else{
			// myScrollReveal();	
		}

	}else{

		// 我不是ie
		// myScrollReveal();
	}


	// 注意事項開合
	$(".notice_title").click(function(){
		$(this).toggleClass("open");
		$(".notice_cont").slideToggle();
	});

});





