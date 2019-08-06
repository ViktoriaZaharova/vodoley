$(document).ready(function () {
    $('.search-item__open').on('click', function () {
        $('.form-search-wrapper').fadeToggle();
    });

    $('.form-search .fa-close').on('click', function () {
        $('.form-search-wrapper').fadeOut();
    });

    $('.main__slider').slick({
        dots: true,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
    });

    $('.product-image__min').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3
    });

    $('.brands__slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 700,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.card__title').equalHeights();

    $('.preview_item .links').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        if ($('.preview_item').hasClass('active')) {
            $('.content-seo .wrapper').addClass('on');
        } else {
            $('.content-seo .wrapper').removeClass('on');
        }
    });



    $('.btn-mobile-menu').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn();
        $('#mobile-menu').animate({
            left: '0px'
        }, 700);
    });


    $('.btn-filter-mobile').on('click', function () {
        $('#overlay').fadeIn();
        $('#mobile-filter').animate({
            left: '0px'
        }, 700);
    });

    $('.panel-mobile .close, #overlay').click(function () {
        $('#mobile-menu, #mobile-filter').animate({
            left: '-100%'
        }, 700);
        $('#overlay').fadeOut();
    });

    $('.btn-phone').on('click', function () {
       $('header .phone-item').slideToggle();
    });


    $('.panel_heading .block_title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
    });

    $('.sort-dropdown .btn-dropdown').on('click', function () {
       $(this).toggleClass('in').siblings('.droprown-menu').slideToggle();
    });


    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 134630,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));


    $('[data-fancybox="gallery"]').fancybox();

});

// color decision
$(document).ready(function () {

    var srcValue = $('.product-image__max img').attr('src');
    var penImg = $('.product-image__max img');
    var linksImg = $('.product-image__max a');

    $('.product-image__min div.item').on('click', function () {
        // e.preventDefault();
        $('.product-image__min div.item').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        linksImg.attr('href', imgPath);


        // $penImg.fadeOut(200, function () {
        // 	$imgPath.attr('src', imgPath).fadeIn(200);
        // });

    });

});