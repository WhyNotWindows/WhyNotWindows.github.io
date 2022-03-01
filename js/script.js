window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

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
                $(".examples__example").eq(i).height($(".examples__img").eq(i).height() + $(".examples__descr").eq(i).height());
            }
            $(this).toggleClass("examples__button_active");
            $(".examples__img").eq(i).toggleClass("examples__img_active");
        });
    });

        //examples img toggle
        $(".examples__img").each(function(i){
            $(this).click(function(){
                if ($(this).hasClass("examples__img_active")){
                    if ($(document).width() <= '575') {
                        $(".examples__example").eq(i).height($(".examples__img").eq(i).height() - 2);
                    }
                    else {
                        $(".examples__example").eq(i).height(160);
                    }
                }
                else {
                    if ($(document).width() <= '575') {
                        $(".examples__example").eq(i).height($(".examples__example").eq(i).height() + $(".examples__descr").eq(i).height() + 100);
                    }
                    else {
                        $(".examples__example").eq(i).height($(".examples__img").eq(i).height() + $(".examples__descr").eq(i).height());
                    }
                }
                $(this).toggleClass("examples__img_active");
                $(".examples__arrow").eq(i).toggleClass("examples__button_active");
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

    $(window).on('load resize', windowSize);

    new WOW().init();
});