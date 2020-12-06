

//<div class="galery">

var step = 800;
var pos = 0;
var slide = 1;
var slide_lngth = $('.pic').length;
var lngth = step*slide_lngth;
var lngth = lngth-800;
lngth = lngth*-1;


var list_m = ['<h2>KTM 390</h2>',
    '<h2>YAMAHA FJR 1300</h2>',
    '<h2>YAMAHA R1</h2>',
    '<h2>DUCATI 1099</h2>',
    '<h2>CUSTOM BIKE</h2>',
    '<h2>MTT 420RR</h2>',
    '<h2>PANTERA 125SK</h2>',
    '<h2>PRIDE 200CC</h2>',
    '<h2>DUCATI MULTISTRADA</h2>'];


$('.l_carsl').click(function () {

    if(pos<0){
        pos = step+pos;
        slide = slide -1;
        $('.box').animate({'margin-left':pos});
    }

    var s = slide-1;

    $('.box_up').html(list_m[s]);
});

$('.r_carsl').click(function () {

    if(pos>lngth){
        pos = pos-step;
        slide = slide +1;
        $('.box').animate({'margin-left':pos});
    }

    var s = slide-1;

    $('.box_up').html(list_m[s]);
});
