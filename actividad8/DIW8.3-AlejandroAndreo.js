'use strict';

$(document).ready(function() {

    $("#b1").click(function() {
        $('.caja1').animate({
            marginLeft: '+=100px',
        }, 400);
    });

    $("#b2").click(function() {
        $('.caja1').animate({
            marginTop: '+=100px',
        }, 400);
    });

    $("#b3").click(function() {
        $('.caja1').animate({
            padding: '+=50px',
        }, 400);
    });

    $("#b4").click(function() {
        $('.caja1').animate({
            padding: '-=50px',
        }, 400);
    });

    $("#b5").click(function() {
        $('.caja1').animate({
            opacity: '+=0.1',
        }, 400);
    });

    $("#b6").click(function() {
        $('.caja1').animate({
            opacity: '-=0.1',
        }, 400);
    });

});