let contadorImagens
let arrayImagens = ['imagens/img1.jpg','imagens/img2.jpg','imagens/img3.jpg']

let botao = contadorImagens 

function primeiraFoto(){
    contadorImagens=0
    document.getElementById("banner").src=arrayImagens[contadorImagens]; 
}

function segundaFoto(){
    contadorImagens=1
    document.getElementById("banner").src=arrayImagens[contadorImagens];
}

function terceiraFoto(){
    contadorImagens=2
    document.getElementById("banner").src=arrayImagens[contadorImagens];
}

function cliqueBotao(){
  document.getElementById("slideshow").style.backgroundColor="green"
}

window.location = "#card1"