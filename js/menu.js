

//menu navigation

var animate_bg = true;
var h = $(window).height();
$('.bg > div').height(h);
var step = 0;


$('.bg').on('mousewheel', function (x) {
    var event = x.originalEvent.wheelDelta / 120;

    $('.one,.two,.three,.four,.five').css({'transition': '1s'});

    if (event < 0) {//down
        to_bottom();

    } else if (event > 0) {//up
        to_up();
    }


});


function to_up() {

    if (step == 1) {
        if (animate_bg) {
            animate_bg = false;
            $('.two').css({'transform': 'translate(0,0)'});
            $('.one').css({'transform': 'translate(0,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 1000);

        }

    } else if (step == 2) {
        if (animate_bg) {
            animate_bg = false;
            $('.three').css({'transform': 'translate(0,0)'});
            $('.two').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 1000);

        }

    } else if (step == 3) {
        if (animate_bg) {
            animate_bg = false;
            $('.four').css({'transform': 'translate(0,0)'});
            $('.three').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 1000);

        }
    } else if (step == 4) {
        if (animate_bg) {
            animate_bg = false;
            $('.five').css({'transform': 'translate(0,0)'});
            $('.four').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 1000);

        }
    }


}


function to_bottom() {
    if (step == 0) {
        if (animate_bg) {
            animate_bg = false;
            $('.one').css({'transform': 'translate(0,-100%)'});
            $('.two').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 1000);

        }

    } else if (step == 1) {
        if (animate_bg) {
            animate_bg = false;
            $('.two').css({'transform': 'translate(-100%,-100%)'});
            $('.three').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 1000);

        }
    } else if (step == 2) {
        if (animate_bg) {
            animate_bg = false;
            $('.three').css({'transform': 'translate(-200%,0)'});
            $('.four').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 1000);

        }
    } else if (step == 3) {
        if (animate_bg) {
            animate_bg = false;
            $('.four').css({'transform': 'translate(-100%,-100%)'});
            $('.five').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 1000);

        }
    }
}


function to_up_for_menu() {

    if (step == 1) {
        if (animate_bg) {
            animate_bg = false;
            $('.two').css({'transform': 'translate(0,0)'});
            $('.one').css({'transform': 'translate(0,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 200);

        }

    } else if (step == 2) {
        if (animate_bg) {
            animate_bg = false;
            $('.three').css({'transform': 'translate(0,0)'});
            $('.two').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 200);

        }

    } else if (step == 3) {
        if (animate_bg) {
            animate_bg = false;
            $('.four').css({'transform': 'translate(0,0)'});
            $('.three').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 200);

        }
    } else if (step == 4) {
        if (animate_bg) {
            animate_bg = false;
            $('.five').css({'transform': 'translate(0,0)'});
            $('.four').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step--;
                animate_bg = true;
            }, 200);

        }
    }
    console.log(step)


}


function to_bottom_for_menu() {
    if (step == 0) {
        if (animate_bg) {
            animate_bg = false;
            $('.one').css({'transform': 'translate(0,-100%)'});
            $('.two').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 200);

        }

    } else if (step == 1) {
        if (animate_bg) {
            animate_bg = false;
            $('.two').css({'transform': 'translate(-100%,-100%)'});
            $('.three').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 200);

        }
    } else if (step == 2) {
        if (animate_bg) {
            animate_bg = false;
            $('.three').css({'transform': 'translate(-200%,0)'});
            $('.four').css({'transform': 'translate(-100%,0)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 200);

        }
    } else if (step == 3) {
        if (animate_bg) {
            animate_bg = false;
            $('.four').css({'transform': 'translate(-100%,-100%)'});
            $('.five').css({'transform': 'translate(0,-100%)'});
            setTimeout(function () {
                step++;
                animate_bg = true;
            }, 200);

        }
    }
    console.log(step)
}


$('.menu a').click(function (e) {
    e.preventDefault();

    $('.one,.two,.three,.four,.five').css({'transition': '.2s'});

    var _step = +$(this).attr('data-step');

    if (_step > step) {
        var minus_s = _step - step;

        var i = 0;

        var interval = setInterval(function () {
            i++;
            if (i <= minus_s) {
                to_bottom_for_menu();
            } else {
                clearInterval(interval);
            }
        }, 400)

        console.log(_step, step)

    }
    else if (_step < step) {

        var minus_s = _step - step;

        var i = 0;

        var interval = setInterval(function () {
            i++;

            if (i <= minus_s * -1) {

                to_up_for_menu();
            } else {
                clearInterval(interval);
            }
        }, 400)

        console.log(_step, step)
    }

});