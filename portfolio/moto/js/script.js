

//scroll


$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if(scroll>800){
        button_show()
    }
    else{
        button_hidden()
    }

    if(scroll>50){
        menu_color()
    }
    else{
        menu_transparent()
    }

    if(scroll>500){
        callback_show();
    }
    else {
        callback_hidden()
    }
});





//function in first page (video) text


setTimeout(function () {
    $('.info').css({"right":0});
},1000);





// menu functions


$('.main_menu a').click(function () {
    var id = $(this).attr('href');
    var pos = $(id).offset();
    $('body,html').animate({scrollTop:pos.top},500);

    return false;
});




function menu_color() {
    $('.main').css({"background":"whitesmoke"})
}

function menu_transparent() {
    $('.main').css({"background":"none"})
}





//all function with button


$('.but_up').click(function () {
    $('body,html').animate({scrollTop:0},1000)
});




function button_show () {
    $('.but_up').css({'opacity':1});
}

function button_hidden () {
    $('.but_up').css({'opacity':0})
}




function callback_show() {
    $('.callback').css({"right":0});
}

function callback_hidden() {
    $('.callback').css({"right":-360});
}


$('.close').click(function () {
    $('.callback').css({'visibility':'hidden'});
});




//function menu for mob version - hamburger


$('.burger').click(function () {
    $('.mob_menu').css({'right':0});
});

$('.close').click(function () {
    $('.mob_menu').css({'right':'-100%'});
});




//function view info about lessons for mob version


if(screen.width>=767){
    less_info()
}

function less_info() {
    $('.less_text1').click(function () {
        $('.img_cover_top').css({'top':0});
    })
}

