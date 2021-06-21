//aqui serve pra pegar as teclas que o usuario ta teclando
document.addEventListener("keydown", botao, false); //ele fica esperando uma tecla ser pressionada ("down"), quando acontecer, ele executa a função botao
document.addEventListener("keyup", desbotao, false); //a mesma coisa, mas espera a tecla ser levantada

var canvas = document.getElementById("screen"); //deixa a referencia do canvas na variavel canvas

var Teclas = [false, false, false, false, false]; //servem pra ver se a tecla ta apertada ou não
var Codigos = [87, 65, 83, 68, 32]; //W, A, S, D, ESPAÇO - ordem respectiva de codigo - tecla
var pincel = [canvas.width/2, 180];//x,y
var speedcap = [3, 5]
var velocidade = 3; //a de movimento
var gravidade = 5; //a gravidade que puxa o sonic p baixo
var Fpulo = 40; //força do pulo
var airborne = false; //ele ta no ar ou não?
var segundos = 0; //pretendo usar essa variavel pras animaçoes
var ctx = canvas.getContext("2d");
var orientacao = "d";

////////////////////////////////////////////////////
function botao(event){
    if(event.keyCode == Codigos[0]) {//w
        Teclas[0] = true;
    }
    if(event.keyCode == Codigos[1]) {//a
        Teclas[1] = true;
        orientacao = "r";
    }
    if(event.keyCode == Codigos[2]) {//s
    	Teclas[2] = true;
    }
    if(event.keyCode == Codigos[3]) {//d
    	Teclas[3] = true;
        orientacao = "d";
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
    if(event.keyCode == Codigos[4]) {//espaço
        Teclas[4] = false;
    }
}
//*/

setInterval(sonic, 33); //isso serve pra repetir a função sonic em mais ou menos 30fps

function sonic(){ //função sonic :D

    if(airborne == true || pincel[1]<180){ //esse IF puxa o sonic p baixo
        pincel[1] += gravidade;
        if(pincel[1]>=180){
            airborne = false;
            pincel[1]=180;
        }
    }

    ////////////////////////////o negócio do 0 ao 30
    if(Teclas[1]==true || Teclas[3]==true){
        if(segundos<30){
            if(segundos == 10){ //isso é um teste pra ver se da pra fazer uma "aceleração" do sonic
                velocidade++;
            }else{
                if(segundos == 20){
                    velocidade++;
                }// teste acaba aqui
            }
            if(velocidade > speedcap[1]){
                velocidade = speedcap[1];
            }
        segundos++;
        }
    }

    if(Teclas[1]==false && Teclas[3]==false){
        if(segundos>0){
            if(segundos == 10){ //teste
                velocidade--;
            }else{
                if(segundos == 20){
                    velocidade--;
                }
            }//teste acaba aqui
            if(velocidade < speedcap[0]){
                velocidade = speedcap[0];
            }
            segundos--;
        }
    }///////////////////////////// 0 ao 30

    ////////////////////////////// ja que a movimentação tava toda cagada antes vou jogar pra ca que sempre verifica (fica mais pesado mas é a melhor solução q eu achei)
    if(Teclas[1] == true && pincel[0]>0){ //se A ta apertado E se o sonic ta dentro do canvas
        pincel[0] -= velocidade;
    }
    if(Teclas[3] == true && pincel[0]<canvas.width){ //esse é pro D
        pincel[0] += velocidade;
    }
    if(Teclas[4] == true && pincel[1]>0 && airborne == false){ //esse é pro pulo
        pincel[1] -= Fpulo;
        airborne = true;
    }

    sprite = sprites(orientacao, velocidade);

    teste = document.getElementById(info1); 
    info1.innerHTML = ("Teclas W, A, S, D, [SPACE] = " + Teclas);
    teste = document.getElementById(info2); 
    info2.innerHTML = ("Coords: " + pincel); 
    teste = document.getElementById(info3); 
    info3.innerHTML = ("Tempo de tecla universal = " + segundos);
    teste = document.getElementById(info4); 
    info4.innerHTML = ("Velocidade = " + velocidade); 
    //teste = document.getElementById(info5); 
    //info5.innerHTML = segundos;
    teste = document.getElementById(info6);
    info6.innerHTML = orientacao; // certeza q eu ainda vou precisar ver mais coisa de debug e talz */
    //background();
    traco();
}

function traco(){ //essa função desenha as coisas na tela
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpa o ultimo sprite
    //background();
    ctx.drawImage(sprite, pincel[0], pincel[1]); //coloca o prite na nova posição
    //ctx.stroke(); //CARIMBO! (esse nn precisa na vdd mas vou deixar aqui, serve pra fazer as linhas)
}
