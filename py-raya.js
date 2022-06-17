//variables principales
const player_chica = 0; //impar
const player_chico = 0; //par
let turn = 1;

//Variables de opciones
let uno = $("#b1");
let dos = $("#b2");
let tres = $("#b3");
let cuatro = $("#b4");
let cinco = $("#b5");
let seis = $("#b6");
let siete = $("#b7");
let ocho = $("#b8");
let nueve = $("#b9");

$(document).ready(function() {
    //1. Comprobar si hay movientos ganadores
    function ganadora() {
            if (uno.hasClass('x') && dos.hasClass('x') && tres.hasClass('x') ||
                cuatro.hasClass('x') && cinco.hasClass('x') && seis.hasClass('x') ||
                siete.hasClass('x') && ocho.hasClass('x') && nueve.hasClass('x') ||

                uno.hasClass('x') && cuatro.hasClass('x') && siete.hasClass('x') ||
                dos.hasClass('x') && cinco.hasClass('x') && ocho.hasClass('x') ||
                tres.hasClass('x') && seis.hasClass('x') && nueve.hasClass('x') ||

                uno.hasClass('x') && cinco.hasClass('x') && nueve.hasClass('x') ||
                tres.hasClass('x') && cinco.hasClass('x') && siete.hasClass('x')) {

                alert("Ha ganado CHICA");
                player_chica++;
                $("#turno1").text(player_chica);
                $(".button").empty();
                $(".x").removeClass("x");
                $(".y").removeClass("y");


            } else if (uno.hasClass('y') && dos.hasClass('y') && tres.hasClass('y') ||
                cuatro.hasClass('y') && cinco.hasClass('y') && seis.hasClass('y') ||
                siete.hasClass('y') && ocho.hasClass('y') && nueve.hasClass('y') ||

                uno.hasClass('y') && cuatro.hasClass('y') && siete.hasClass('y') ||
                dos.hasClass('y') && cinco.hasClass('y') && ocho.hasClass('y') ||
                tres.hasClass('y') && seis.hasClass('y') && nueve.hasClass('y') ||

                uno.hasClass('y') && cinco.hasClass('y') && nueve.hasClass('y') ||
                tres.hasClass('y') && cinco.hasClass('y') && siete.hasClass('y')) {

                alert("Ha ganado CHICO");
                player_chico++;
                $("#turno2").text(player_chico);
                $(".button").empty();
                $(".x").removeClass("x");
                $(".y").removeClass("y");

            } else if (uno.text() && dos.text() && tres.text() && cuatro.text() && cinco.text() && seis.text() && siete.text() && ocho.text() && nueve.text()) {

                alert("Ninguno ha ganado, intentalo otra vez");
                $(".button").empty();
                $(".x").removeClass("x");
                $(".y").removeClass("y");

            }

        }
    //2. Implementar la lógica de turnos de juego consecutivos, añadiendo function()
        $(".button").click(function() {

            if (turn == player_chica&& !$(this).text()) {
                $(this).text("X");
                $(this).addClass("x");

                turn = player_chico;
                ganadora();

            } else if (!$(this).text()) {
                $(this).text("Y");
                $(this).addClass("y");

                turn = player_chica;
                
                ganadora();
            }


        });
        
        // 3. reinicio
        
        $(".juegoAgain").click(function() {
            location.reload();
        })


});