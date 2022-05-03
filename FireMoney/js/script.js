// Slider
//1
const slideValue1 = document.querySelector("#value1");
const inputSider1 = document.querySelector("input#slider1");
const progressBar1 = document.getElementById("progressbar1");
const selector1 = document.getElementById("selector1");
inputSider1.oninput =  (() => {
    let value = inputSider1.value;
    slideValue1.textContent = value + " ₽";
    slideValue1.style.left = (value/1000) + "%";
    selector1.style.left = (value/1000) + "%";
    progressBar1.style.width = (value/1000) + "%";
})
//2
const slideValue2 = document.querySelector("#value2");
const inputSider2 = document.querySelector("input#slider2");
const progressBar2 = document.getElementById("progressbar2");
const selector2 = document.getElementById("selector2");
inputSider2.oninput =  (() => {
    let value = inputSider2.value;
    let day = "";
    if (value == 21) {
        day = " день";
    }
    else if (value%10 == 0) {
        if (value <= 4) {
            day = " дня";
        }
        else {
            day = " дней";
        }
    }
    else {
        if (Math.floor(value/10) != 1 && value%10 <= 4) {
            day = " дня";
        }
        else {
            day = " дней";
        }
    }
    slideValue2.textContent = value + day;
    slideValue2.style.left = /* (value/0.333) */ ((value-3)/0.27) + "%";
    selector2.style.left = ((value-3)/0.27) + "%";
    progressBar2.style.width = ((value-3)/0.27) + "%";
})

// Line switch
window.addEventListener('DOMContentLoaded', () => {
    const range = document.querySelector('.money__range'),
    btnline = document.querySelector('#btn-line');
    i = 1;
    value = 12;

    btnline.addEventListener('click', () => {
        if (i==4) {
            i = 1;
            range.value = 12;
            value = 12;
            document.querySelector('.money__num_'+2).classList.toggle('money__num_'+2+'_active');
            document.querySelector('.money__num_'+3).classList.toggle('money__num_'+3+'_active');
            document.querySelector('.money__num_'+4).classList.toggle('money__num_'+4+'_active');
            document.querySelector('.money__img_'+2).src = 'icons/how/fill.svg';
            document.querySelector('.money__img_'+3).src = 'icons/how/wait.svg';
            document.querySelector('.money__img_'+4).src = 'icons/how/get.svg';
        }
        else {
            i += 1,
            document.querySelector('.money__num_'+i).classList.toggle('money__num_'+i+'_active');
            document.querySelector('.money__img_'+i).src = 'icons/how/icon'+i+'.png';
            if (i==4) {
                value = 100;
            }
            else {
                value += 25;
            }
            range.value = value;
        }
        //slider
        const inputSider3 = document.querySelector("input#slider3");
        const progressBar3 = document.getElementById("progressbar3");
        progressBar3.style.width = value + "%";
    });
})

// Hamburger menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_main'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_main_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_main_active');
        })
    })
})

// Answers
$(document).ready(function(){
    old = 0;
    document.querySelector(".answers__arrow_"+old).src = 'icons/arrows/arr-down-w.svg';
    $(".answers__block").eq(old).height(42 + $(".answers__descr").eq(i).height());
    $(".answers__block").each(function(i){
        $(this).click(function(){
            document.querySelector(".answers__arrow_"+old).src = 'icons/arrows/arr-down.svg';
            $(".answers__block_active").height(21);
            $(".answers__block_active").toggleClass("answers__block_active");
            document.querySelector(".answers__arrow_"+i).src = 'icons/arrows/arr-down-w.svg';
            $(this).toggleClass("answers__block_active");
            $(this).height(42 + $(".answers__descr").eq(i).height());
            /* if (old != i) {
                $(this).toggleClass("answers__block_active");
                $(this).height(42 + $(".answers__descr").eq(i).height());
            } */
            old = i;
        });
    });
});