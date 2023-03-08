var canvas = document.getElementById("screen"); //ta tudo mais bonitinho no move.js
var ctb = canvas.getContext("2d");
var bg = document.getElementById("b1"); 
/*
1° - teste do background
2° - layers? (isso é IMPORTANTISSIMO)
*/
function background(){
    ctb.drawImage(bg, 0, 0); 
}
