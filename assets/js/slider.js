/* DECLARACION DE VARIABLES */

var numFotos = 12; /* El slider tendrá 12 fotos */
var ordenPrincipal, ordenSiguiente;
var intervalo, temporizador;
var tiempoEspera = 5000; /* (milisegundos = 5 segundos) */
/* var numAleatorio; */

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
    /* Mejor usar esta nueva fórmula con comilla simple invertida, que es la que está a la derecha de la tecla p: */ 
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden", ordenSiguiente);
    
    clearInterval(intervalo);
    crearIntervalo();
        
    })
   

    /* ESCUCHAMOS CLICK EN ELEMENTO FLECHA DER */
flechaDer.addEventListener("click", function(){

    ordenPrincipal = fotoActiva.getAttribute("orden");
    ordenPrincipal = Number(ordenPrincipal);

    if(ordenPrincipal === numFotos){
        ordenSiguiente = 1;
    }else{
        ordenSiguiente = ordenPrincipal + 1;
    }
    
    /* IMPORTANTE: 
    El atributo src es reservado. Por eso se usa elemento.src | Cuando el atributo es inventado como orden, hay que utlizar elemento.getAttribute("atributoinventado") o elemento.setAttribute("atributoinventado",nuevovalor) */

    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden", ordenSiguiente);

    clearInterval(intervalo);
    crearIntervalo();
   
})
/* IMAGEN RANDOM */
/* Lo primero convertir a numero la variable para asegurarnos que es numerica */

/* numAleatorio = Number(numAleatorio); */

/* Utilizamos la funcion Math.random() que nos da un valor decimal entre 0 y 1 y lo multiplicamos por la variable del numero total de fotos */

/* numAleatorio = Math.random() * numFotos; */

/* Ahora necesitamos convertir a número entero el valor decimal. Tiene que estar entre 1 y 12 (numero total de fotos) */

/* numAleatorio = Math.ceil (numAleatorio); */

/* fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg`;
fotoActiva.setAttribute("orden",numAleatorio); */


/* FUNCIONES */
/* Funcion para cambiar la foto activa de forma aleatoria */
function funcion_random(){
    let numAleatorio;
    numAleatorio = Number(numAleatorio);
    numAleatorio = Math.random() * numFotos;
    numAleatorio = Math.ceil (numAleatorio);
    fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg`;
fotoActiva.setAttribute("orden",numAleatorio);
}
/* CAMBIO AUTOMATICO DE IMAGENES CADA X SEGUNDOS */

function crearIntervalo(){
    
    
    intervalo = window.setInterval(funcion_random,5000);


}

crearIntervalo();

/* Esta simple sentencia, por si sola, sin llamar a ninguna funcion cambiaria la foto activa cada 5 sg*/
/* window.setInterval(funcion_random,5000); */