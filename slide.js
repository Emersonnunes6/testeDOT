var contadorImagens
var arrayImagens = ['imagens/img1.jpg','imagens/img2.jpg','imagens/img3.jpg']




function primeiraFoto(){
    contadorImagens=0
    document.getElementById("banner").src=arrayImagens[contadorImagens]; //altera a img do elemento "agni" de acordo com o indice// incrementa a nossa referencia
}

function segundaFoto(){
    contadorImagens=1
    document.getElementById("banner").src=arrayImagens[contadorImagens]; //altera a img do elemento "agni" de acordo com o indice// incrementa a nossa referencia
}

function terceiraFoto(){
    contadorImagens=2
    document.getElementById("banner").src=arrayImagens[contadorImagens]; //altera a img do elemento "agni" de acordo com o indice// incrementa a nossa referencia
}



function avancar(){

    if(contadorImagens == arrayImagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
    {
        contadorImagens=0
        contadorImagens--
    }
    document.getElementById("banner").src=arrayImagens[contadorImagens]; //altera a img do elemento "agni" de acordo com o indice
 // incrementa a nossa referencia
  }
console.log(contadorImagens)
