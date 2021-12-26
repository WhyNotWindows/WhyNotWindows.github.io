$(document).ready(function(){

    //Slider
    $('.modules__carousel').slick({
        speed: 1000,
        dots: true,
        appendDots: '.modules__invisible',
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src = "icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "icons/arrow_right.svg"></button>',
        responsive: [
			{
				breakpoint: 992,
				settings: {
					dotsClass: "my-dots",
					arrows: false
				}
			}
        ]
    });

    //Adaptive slider image
    var w=$(".modules__carousel").outerWidth();
	$(".modules__img").css({"width":w});

    //Modal
    $('[data-modal=consultation]').click(function(){
        $('.overlay').fadeIn();
    });
    $('[data-modal=close]').click(function(){
        $('.overlay').fadeOut();
    });
    $('[data-modal=submit]').click(function(){
        $('.overlay').fadeOut();
    });
});