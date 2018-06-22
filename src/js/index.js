document.addEventListener('DOMContentLoaded', function () {
    console.log('work');

});
$(document).ready(function () {
      $('.breaking-news__slider').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          autoplaySpeed: 0,
          speed: 8000,
          cssEase:'linear'
      });
    $('.news-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        cssEase:'linear',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".carousel-posts").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase:'linear',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 961,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $(".slider-posts").slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:'linear',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

    $(".news-in-picture__tab-list").on("click", function () {
        var target = $(event.target);
        if(target.is(".tab-list__item-img")){
            target.parent(".tab-list__item").addClass("active").siblings().removeClass("active");
            var tabContentDataName = target.parent(".tab-list__item").attr('data-tab');
            var tabContent = $('[data-tab-block="' + tabContentDataName + '"]');
            $(tabContent).addClass("active").siblings().removeClass("active");
        }
    });
    $('.entertainment__tab-list').on('click', function () {
        var target = $(event.target);
        if(target.parents().is('.tab-list__item')){
            var tabContentDataName = target.parents('.entertainment__tab-item').attr('data-tab');
            var tabContent = $('[data-tab-block="' + tabContentDataName + '"]');
            $(tabContent).addClass("active").siblings().removeClass("active");
        }
    });
    //video custom controls
    $(".video__play-pause").click(function () {
        if($("#video1").get(0).paused){
            $("#video1").get(0).play();
            $(".video__play-pause").addClass("play");
        }else{
            $("#video1").get(0).pause();
            $(".video__play-pause").removeClass("play");
        }
    });
    $("#video1").on("ended", function() {
        $(".video__play-pause").removeClass("play");
    });

    //sidebar-right archive
    var holidays = ["2017/08/24", "2017/08/22", "2017/08/02"];
    $(".archive-calentar").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        beforeShowDay: highLightHolidays

    });
    function highLightHolidays(date){
        for (var i = 0; i < holidays.length; i++) {
            if (new Date(holidays[i]).toString() == date.toString()) {
                return [true, 'ui-state-holiday'];
            }
        }
        return [true];
    }

    //mobile nav
    $(".mobile-nav-trigger").on("click", function (e) {
        var target = e.currentTarget;
        console.log(target);
        if($(target).is(".header__mobile-nav-trigger")){
            $(".header-site-nav").addClass("show");
            $("body").addClass("blocked");
        }else if($(target).is(".footer__mobile-nav-trigger")){
            $(".footer-site-nav").addClass("show");
            $("body").addClass("blocked");
        }
    });
    //close mobile.nav
    $(".site-nav__close-button").on("click", function () {
        var closeAttributName = $(this).attr("data-close");
        console.log(closeAttributName);
        $("[data-nav='" + closeAttributName + "']").removeClass("show");
        $("body").removeClass("blocked");
    });

    //form validate
    jQuery.validator.addMethod("validate_email",function(value, element) {
        if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ))
        {
            return true;
        }
        else
        {
            return false;
        }
    },"Please enter a valid Email.");


    $("#subscription__form").validate({
        rules: {
            email: {
                email: true,
                required: true,
                validate_email: true
            }
        },
        messages: {
            email: {
                required: "Please, enter your Email!"
            }
        }
    });

    $("#login").validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 8
            }
        },
        messages: {
            username: {
                required: "Please, enter your name or login",
                minlength: "Length of field at least 3 characters"
            },
            password: {
                required: "This field is required!",
                minlength: "Password at least 6 characters",
                maxlength: "Password not more then 8 characters"
            }
        }
    });

    //.subscription-form
    $('.subscription-form__row > input').blur(function() {
        if ($(this).siblings('.error').length > 0 && $(this).siblings('label.error').css("display") == "block") {
            $(this).parent().addClass('subscription-form__row--error');
        } else {
            $(this).parent().removeClass('subscription-form__row--error');
        }
    });

    $('.subscription-form').on('submit', function (e) {
        if ($('.subscription-form__row').children('label.error').length > 0 && $('label.error').css("display") == "block"){
            $('.subscription-form__row').addClass('subscription-form__row--error');
        }else {
            $('.subscription-form__row').removeClass('subscription-form__row--error');
        }
    });

    //.login-form
    $(".login-form__row > input").blur(function() {
        if ($(this).siblings('.error').length > 0 && $(this).siblings('label.error').css("display") == "block") {
            $(this).parent().addClass('login-form__row--error');
        } else {
            $(this).parent().removeClass('login-form__row--error');
        }
    });
    $('.login-form').on('submit', function (e) {
        console.log("submit");
        if ($('.login-form__row').children('label.error').length > 0 && $('label.error').css("display") == "block"){
            $('.login-form__row').addClass('login-form__row--error');
        }else {
            $('.login-form__row').removeClass('login-form__row--error');
        }
    });

    //search
    var windowWidth = $( window ).width();
    var searchForm = $(".header-search"),
        searchInput = $(".header-search__input");
    $(".header-search__input-trigger").on("click", function () {
        $(this).hide();
        $(searchInput).addClass("active-search");
        $(searchForm).addClass("active-search");
        if(windowWidth <= 480){
            $(".info-block__social").hide();
        }
    });

    $(document).on("click", function (e) {
        var target = e.target;
        if(searchForm.hasClass("active-search") && searchForm.has(target).length === 0){
            console.log("active");
            $(searchInput).removeClass("active-search");
            $(searchForm).removeClass("active-search");
            $(".header-search__input-trigger").show();
            if(windowWidth <= 480){
                $(".info-block__social").show();
            }
        }
    });


});