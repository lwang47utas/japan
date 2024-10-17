$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

// スムーズスクロール
$('a[href^="#"]').click(function(e) {
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;

	$.when(
		$("html, body").animate({
			scrollTop: position
		}, 1000, "swing"),
		e.preventDefault(),
	);
});


// LazyLoad用
$(document).ready(function(){
    lazyload();
  });