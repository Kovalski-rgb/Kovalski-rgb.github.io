function sprites(lado, velocidade){
    /*var spriteCycle = false
    if(velocidade == 0){
        lado += 0;
    }
    if(velocidade>=1 || Teclas[1]==true || Teclas[3]==true){
        spriteCycle = true
    }
    if((velocidade>=1 || velocidade<25) && spriteCycle){
        
    }*/

    lado += 0;
    var sprite = document.getElementById(lado); //deixa a referencia do sprite na variavel sprite
    //////////////////////////debugging
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
        teste = document.getElementById(info5); 
        info5.innerHTML = (sprite.getAttribute("id"));//.slice(-1);
    /////////////
    return sprite
}
