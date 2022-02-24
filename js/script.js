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
                //$(".examples__example").eq(i).height($(".examples__img").eq(i).height());
                $(".examples__example").eq(i).height(160);
            }
            else {
                $(".examples__example").eq(i).height($(".examples__example").eq(i).height() + $(".examples__descr").eq(i).height());
            }
            $(this).toggleClass("examples__button_active");
        });
    });

    function windowSize() {
        if ($(document).width() <= '470'){
            $(".examples__example").each(function(i) {
                $(".examples__example").eq(i).height($(".examples__img").eq(i).height() - 2);
            });
            console.log("if");
        }
        console.log("function");
    }

    $(window).on('load resize', windowSize);
});