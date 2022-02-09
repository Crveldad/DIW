'use strict';

$(document).ready(function() {

    $(".caja1").click(function() {
        alert('Dale a aceptar, anda');
    });

    $(".caja2").dblclick(function() {
        $(this).hide();
    });
    $(".caja3").mouseenter(function() {
        $(this).fadeOut(5000);
    });
    $(".caja4").mouseleave(function() {
        $(this).css("background-color", "brown");
    });
    $(".caja5").hover(function() {
        $(this).css("color", "yellow")
        $(this).mouseleave(function() {
            $(this).css("background-color", "orange");
            $(this).css("color", "white");
        });
    });
    $(".caja6").mousedown(function() {
        $(this).html("pulsadO");
    });
    $(".caja7").mouseup(function() {
        $(this).html("Soltado");
    });
});