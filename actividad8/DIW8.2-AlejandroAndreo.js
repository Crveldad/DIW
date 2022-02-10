'use strict';

$(document).ready(function() {

    $("#b1").click(function() {
        $(".caja1").slideUp(300);
    });

    $("#b2").click(function() {
        $(".caja1").slideDown(300);
    });

    $("#b3").click(function() {
        $(".caja1").slideToggle(300);
    });

    $("#b4").click(function() {
        $(".caja1").fadeOut(300);
    });

    $("#b5").bind("click mouseenter",
        function() {
            $(".caja1").css("background-color", "green");
        });

    $("#b6").click(function() {
        $(".caja1").fadeIn(100);
        $(".caja1").delay(800);
        $(".caja1").fadeOut(800);
    });

    $("#b7").click(function() {
        $(".caja1").toggleClass("animacion");
    });

});