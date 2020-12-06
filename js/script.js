

//button 'up' on media queries

$(window).on('scroll', function () {
    var scroll = $(this).scrollTop();

    if (scroll > 800) {
        button_show()
    }
    else {
        button_hidden()
    }
});


function button_show() {
    $('.but_up').css({'opacity': 1});
}

function button_hidden() {
    $('.but_up').css({'opacity': 0})
}

$('.but_up').click(function () {
    $('body,html').animate({scrollTop: 0}, 1000)
});










//burger menu on media queries

$('.burger_menu').click(function () {
    $('.mob_menu').css({'right': 0});
});

$('.close').click(function () {
    $('.mob_menu').css({'right': '-100%'});
});


$('.menu_m a').click(function () {
    var id = $(this).attr('href');
    var pos = $(id).offset();
    $('body,html').animate({scrollTop: pos.top}, 500);
    $('.mob_menu').css({'right': '-100%'});


    return false;
});









//for line (menu) to right side on desktop version


$('.line_menu, .main_menu').on('mouseenter', function () {
    $('.boxes_menu').css({'right': '0'});
    $('.line_menu').css({'border-left': 'none'});
    $('.line_menu h4').css({'display': 'none'});
});


$('.line_menu, .main_menu').on('mouseleave', function () {
    $('.boxes_menu').css({'right': '-13%'});
    $('.line_menu').css({'border-left': '2px solid white'});
    $('.line_menu h4').css({'display': 'inline'});
});