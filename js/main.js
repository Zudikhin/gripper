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

    $('.game_one_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".game_one_count span").text(i + ' / ' + slick.slideCount);
    });

    $('.game_two_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_two_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".game_two_count span").text(i + ' / ' + slick.slideCount);
    });

    $('.game_three_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_three_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".game_three_count span").text(i + ' / ' + slick.slideCount);
    });

    $('.game_four_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_four_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".game_four_count span").text(i + ' / ' + slick.slideCount);
    });

    $('.game_five_slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.game_five_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(".game_five_count span").text(i + ' / ' + slick.slideCount);
    });

});