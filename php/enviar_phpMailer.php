<?php

include_once "./includes/_config.php";
include_once "./class/_comprobaciones.php";


$comprobaciones = new clase_comprobaciones;


/* recoger datos y comprobar */
$destino = "mirianamaya@gmail.com";/* correo del admin */
$nombre = $_POST["nombre"];/* datos del usuario */
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];


/* COMPROBACIONES */
/* nombre */
if($comprobaciones->comprobarVacio($nombre)==true){
    //salirme al index con un fallo
    header("location:../index.html?fallo=1#hitocontacto");
    //die para no ejecutar más este php
    die;
}
$nombre = $comprobaciones->filtrarValor($nombre);

/* correo */
if($comprobaciones->comprobarVacio($correo)==true){
    //salirme al index con un fallo
    header("location:../index.html?fallo=2#hitocontacto");
    //die para no ejecutar más este php
    die;
}
$correo = $comprobaciones->filtrarValor($correo);
if($comprobaciones->validar_email($correo)==false){
    //salirme al index con un fallo
    header("location:../index.html?fallo=3#hitocontacto");
    //die para no ejecutar más este php
    die;
}
/* telefono */
if($comprobaciones->comprobarVacio($telefono)){
    //salirme al index con un fallo
    header("location:../index.html?fallo=4#hitocontacto");
    //die para no ejecutar más este php
    die;
}
$telefono = $comprobaciones->filtrarValor($telefono);
if($comprobaciones->validar_numero($telefono)==false){
    //salirme al index con un fallo
    header("location:../index.html?fallo=5#hitocontacto");
    //die para no ejecutar más este php
    die;
}

/* mensaje */


/* FIN COMPROBACIONES */


/* datos que cogemos de su CLIENTE */
/* ip */
$ip = $_SERVER['REMOTE_ADDR'];

/* datos que cogemos deL SISTEMA */
/* fecha */
$datetime = date("Y-m-d H:i:s");

/* mensaje concatenado para enviar por correo*/
$contenido = "fecha de envío: ".$datetime."\nIP: ".$ip."\nNombre: ".$nombre."\nCorreo: ".$correo."\nTelefono: ".$telefono."\nMensaje: ".$mensaje;

$cabecera = 'From info@webda.eus'."\r\n".
/* 'Reply-To: info@webda.eus'."\r\n". */
'X-Mailer: PHP/'.phpversion();

/* 8 Enviamos correos por PHP Mailer. Rellenamos algunas variables*/
$correoEmisor = "info@webda.eus";
$nombreEmisor = "Webda - Alumno";
$destinatario = $correo;
$nombreDestinatario = $nombre;
$asunto = "Consulta realizada en la web";
$cuerpo = $contenido;

include "./includes/_configPhpMailer.php";

/* 9-enviar correos de confirmacion*/
mail($destino,"Consulta de la web", $contenido,$cabecera); /* correo que recibo yo */

mail($correo,"Hemos recibido tu consulta",$contenido,$cabecera); /* correo que recibe el cliente */

/* 10-redirigir a gracias*/
header("location:../index.html?enviado=correo enviado por Php Mailer!");
?>