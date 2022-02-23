$(document).ready(function(){
/*     $(".examples__arrow").each(function(i){
        $(this).click(function(){
            $(this).toggleClass("examples__button_active");
            $(".examples__example").eq(i).toggleClass("examples__example_active");
        });
    }); */
    $(".examples__arrow").each(function(i){
        $(this).click(function(){
            if ($(this).hasClass("examples__button_active")){
                $(".examples__example").eq(i).height(160);
            }
            else {
                $(".examples__example").eq(i).height($(".examples__example").eq(i).height() + $(".examples__descr").eq(i).height());
            }
            $(this).toggleClass("examples__button_active");
        });
    });
});