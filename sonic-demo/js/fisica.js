document.addEventListener("keydown", botao, false); //só coloquei aqui pra input
document.addEventListener("keyup", desbotao, false); //

var Teclas = [false, false, false, false, false]; //servem pra ver se a tecla ta apertada ou não
var Codigos = [87, 65, 83, 68, 32]; //W, A, S, D, ESPAÇO - ordem respectiva de codigo - tecla
var segundos = 1;
var velocidade = 1;
var velocidadeX = 1;
var SpeedCap = 20;
var velModifier = 0;

////////////////////////////////////////////////////
function botao(event){
    if(event.keyCode == Codigos[0]) {//w
        Teclas[0] = true;
    }
    if(event.keyCode == Codigos[1]) {//a
        Teclas[1] = true;
    }
    if(event.keyCode == Codigos[2]) {//s
    	Teclas[2] = true;
    }
    if(event.keyCode == Codigos[3]) {//d
    	Teclas[3] = true;
    }
    if(event.keyCode == Codigos[4]){//espaço
        Teclas[4] = true;
    }
}
//////////////////////////////////////////////////// FUNÇÃO PRA VER SE O BOTÃO TA APERTADO OU NN
function desbotao(event){
    if(event.keyCode == Codigos[0]) {//w
        Teclas[0] = false;
    }
    else if(event.keyCode == Codigos[1]) {//a
        Teclas[1] = false;
    }
    if(event.keyCode == Codigos[2]) {//s
    	Teclas[2] = false;
    }
    else if(event.keyCode == Codigos[3]) {//d
    	Teclas[3] = false;
    }
    if(event.keyCode == Codigos[4]){//espaço
        Teclas[4] = false;
    }
}
setInterval(fisica, 33);

function fisica(){
    ////////////////////////////o negócio do 0 ao 30
    if(Teclas[1]==true || Teclas[3]==true){
        if(segundos<30){
            segundos++;
            velocidadeX += velModifier;
        }
    }
    
    if(Teclas[1]==false && Teclas[3]==false){
        if(segundos>1){
            segundos--;
            velocidadeX -= velModifier;
        }
    }///////////////////////////// 0 ao 30
//a = delta v / delta t



    teste = document.getElementById(info1);////////print de informação
    info1.innerHTML = ("Teclas W, A, S, D, [SPACE] = " + Teclas);
    teste = document.getElementById(info2); 
    info2.innerHTML = ("Delta Time: " + segundos); 
    teste = document.getElementById(info3); 
    info3.innerHTML = ("Aceleração = " + velModifier);
    teste = document.getElementById(info4); 
    info4.innerHTML = ("VelocidadeX = " + velocidadeX);
    teste = document.getElementById(info5); 
    //info5.innerHTML = segundos;
    teste = document.getElementById(info6);
    //info6.innerHTML = segundos;
}