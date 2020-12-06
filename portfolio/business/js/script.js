

$('.motto1').css({'visibility':'visible'}).addClass('animate__fadeInDown');

$('.motto2').css({'visibility':'visible'}).addClass('animate__fadeInUp');



var cord_about = $('.services').offset();

var cord_text = $('.s_center').offset();

var cord_boxes = $('.about').offset();

var cord_partners = $('.partners').offset();



$(window).scroll(function () {
    var scrl_s = $(this).scrollTop();

    if(scrl_s>=cord_about.top){
        $('.about_t').css({'visibility':'visible'}).addClass('animate__fadeInLeft');
    }

});



$(window).scroll(function () {
    var scrl_t = $(this).scrollTop();

    if(scrl_t>=cord_text.top-500){
        $('.text').css({'visibility':'visible'}).addClass('animate__fadeInDown');
    }

});



$(window).scroll(function () {
    var scrl_about = $(this).scrollTop();

    if(scrl_about>=cord_boxes.top-300){
        $('.a_box1').css({'visibility':'visible'}).addClass('animate__fadeInLeft');
        $('.a_box2').css({'visibility':'visible'}).addClass('animate__fadeInDown');
        $('.a_box3').css({'visibility':'visible'}).addClass('animate__fadeInRight');
    }

});




$(window).scroll(function () {
    var scrl_p = $(this).scrollTop();

    if(scrl_p>=cord_partners.top-600){
        $('.partners_info').css({'visibility':'visible'}).addClass('animate__fadeInLeft');
    }

});




$('.burger').click(function () {
    $('.respons_menu').css({'right':0});
});

$('.close').click(function () {
    $('.respons_menu').css({'right':'-100%'});
});