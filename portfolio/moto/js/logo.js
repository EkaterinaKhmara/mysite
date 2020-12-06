


var cord_m = $(".l_m").offset();

$('.main ul').mousemove(function (e) {
    var c = e.pageX;

    // var cord = $(this).offset();
    logo_hidden();
    size_move_forward_logo(c);

});





$(".main li a").mouseleave(function () {
    size_move_back_logo();
});





function size_move_forward_logo(cord) {
    $('.l_m').css({"position":"absolute","top":0,"transform":"rotate(-45deg) scale(0.4)"});
    $('.l_m').css({"left":cord-140});

}

function size_move_back_logo() {
    $('.l_m').css({"left":cord_m.left});
    $('.l_m').css({"position":"inherit","transform":"rotate(0deg)  scale(1)"});
    logo_show();
}





function logo_hidden() {
    $(".l_n").css({"visibility":"hidden"});
}

function logo_show() {
    $(".l_n").css({"visibility":"visible"});
}
