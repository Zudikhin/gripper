$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

    $(".scroll_home").click(function() {
        $(".nav_mobile_top_btn").removeClass("active");
        $(".nav_mobile_drop").removeClass("active");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    });

    $(".scroll_game").click(function() {
        $(".nav_mobile_top_btn").removeClass("active");
        $(".nav_mobile_drop").removeClass("active");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".game").offset().top - 120
        }, 2000);
    });


    $(".scroll_blog").click(function() {
        $(".nav_mobile_top_btn").removeClass("active");
        $(".nav_mobile_drop").removeClass("active");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".blog").offset().top - 120
        }, 2000);
    });

    $('.game_one_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_two_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_three_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_four_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_five_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});