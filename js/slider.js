

//for portfolio slider

var step_s = 900;
var pos_s = 0;
var slide = 1;
var slide_lngth = $('.boxes .img_port').length;
var lngth_s = step_s * slide_lngth;
var lngth = lngth_s - 900;
lngth = lngth * -1;


var list_m = ['<div class="port_skills"><p>◼ HTML</p><p>◼ CSS</p><p>◼ JS+jQuery</p><p>◼ Animation</p><p>◼ Responsive</p></div>',
    '<div class="port_skills"><p>◼ HTML</p><p>◼ CSS</p><p>◼ JS+jQuery</p><p>◼ Animation</p><p>◼ Responsive</p></div>',
    '<div class="port_skills"><p>◼ HTML</p><p>◼ CSS</p><p>◼ Photoshop</p><p>◼ Mockup</p></div>'];


$('.l_carsl').click(function () {


    if (pos_s < 0) {
        pos_s = step_s + pos_s;
        slide = slide - 1;
        $('.boxes').animate({'margin-left': pos_s});
    }

    var s = slide-1;

    $('.port_skills').html(list_m[s]);

});

$('.r_carsl').click(function () {

    if (pos_s > lngth) {
        pos_s = pos_s - step_s;
        slide = slide + 1;
        $('.boxes').animate({'margin-left': pos_s});
    }

    var s = slide-1;

    $('.port_skills').html(list_m[s]);

});