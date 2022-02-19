$(document).ready(function(){
    //Cards
    $(".button__front").each(function(i){
        $(this).click(function(){
            $(".variants__front").eq(i).toggleClass("variants_active");
            $(".variants__back").eq(i).toggleClass("variants_active");
        });
    });
    $(".button__back").each(function(i){
        $(this).click(function(){
            $(".variants__front").eq(i).toggleClass("variants_active");
            $(".variants__back").eq(i).toggleClass("variants_active");
        });
    });

    //Slider
    $('.comments__slider').slick({
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png" alt="right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
});

//Map
/* function initMap() {
    var coordinates = {lat: 55.74799, lng: 37.62723},
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 18,
    });

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
} */