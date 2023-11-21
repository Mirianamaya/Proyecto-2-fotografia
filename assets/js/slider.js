/* DECLARACION DE VARIABLES */

var numFotos = 12; /* El slider tendrá 12 fotos */
var ordenPrincipal, ordenSiguiente;
var intervalo, temporizador;
var tiempoEspera = 5000; /* (milisegundos = 5 segundos) */

/* DECLARACION DE CONSTANTES */

const flechaIzd = document.getElementById("flechaIzd");
/* console.log(flechaIzd); */
const flechaDer = document.getElementById("flechaDer");
/* console.log(flechaDer); */
const fotoActiva = document.getElementById("fotoActiva");
/* console.log(fotoActiva) */

/* ACCION DE FLECHAS AL PULSAR, PASAR ADELANTE O ATRAS EN INFINITO */

/* ESCUCHAMOS CLICK EN ELEMENTO FLECHA IZD */
flechaIzd.addEventListener("click", function(){

    /* Recogemos el valor String del atributo orden del elemento img con la foto principal*/
    ordenPrincipal = fotoActiva.getAttribute("orden");
    ordenPrincipal = Number(ordenPrincipal);

    /*condición para controlar que no se salga del total de fotos  */
    if(ordenPrincipal === 1){
        ordenSiguiente = numFotos;
    }else{
        ordenSiguiente = ordenPrincipal - 1;
    }

    /* fotoActiva.src="./assets/img/slider1_2560.jpg" */
    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"; */
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden", ordenSiguiente);
   
    })


