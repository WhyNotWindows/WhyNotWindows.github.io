$(document).ready(function(){
/*     $(".examples__arrow").each(function(i){
        $(this).click(function(){
            $(this).toggleClass("examples__button_active");
            $(".examples__example").eq(i).toggleClass("examples__example_active");
        });
    }); */

    //example toggle
    $(".examples__arrow").each(function(i){
        $(this).click(function(){
            if ($(this).hasClass("examples__button_active")){
                //$(".examples__example").eq(i).height($(".examples__img").eq(i).height());
                $(".examples__example").eq(i).height(160);
            }
            else {
                $(".examples__example").eq(i).height($(".examples__example").eq(i).height() + $(".examples__descr").eq(i).height());
            }
            $(this).toggleClass("examples__button_active");
            $(".examples__img").eq(i).toggleClass("examples__img_active");
        });
    });

    //example width
    function windowSize() {
        if ($(document).width() <= '575'){
            $(".examples__example").each(function(i) {
                $(".examples__example").eq(i).height($(".examples__img").eq(i).height() - 2);
                $(".examples__example").eq(i).width($(".examples__img").eq(i).width());
            });
        }
        else {
            $(".examples__example").width(500);
        }
    }

    //examples img toggle
    $(".examples__img").each(function(i){
        $(this).click(function(){
            if ($(this).hasClass("examples__img_active")){
                $(".examples__example").eq(i).height($(".examples__img").eq(i).height() - 2);
            }
            else {
                $(".examples__example").eq(i).height($(".examples__example").eq(i).height() + $(".examples__descr").eq(i).height());
            }
            $(this).toggleClass("examples__img_active");
            $(".examples__button").eq(i).toggleClass("examples__button_active");
        });
    });

    $(window).on('load resize', windowSize);
});