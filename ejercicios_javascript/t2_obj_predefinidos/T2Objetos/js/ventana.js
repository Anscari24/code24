document.title = window.name;

/* document.querySelectorAll("html")[0].style.overflow = "hidden"; */
/* document.getElementsByTagName("html")[0].style.overflow = "hidden"; */
/* document.querySelectorAll("html")[0].style.overflow = "hidden"; */
//ejercicio 9

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/* var hora = function hora() {
  var y = new Date();
  var h = addZero(y.getHours());
  var m = addZero(y.getMinutes());
  var s = addZero(y.getSeconds());

  document.getElementById("horas").innerHTML = h + ":" + m + ":" + s;
}; */

var muestraReloj = function muestraReloj() {
  var fechaHora = new Date();
  var horas = addZero(fechaHora.getHours());
  var minutos = addZero(fechaHora.getMinutes());
  var segundos = addZero(fechaHora.getSeconds());

  /*   if (horas < 10) {
    horas = `0${horas}`;
  }
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  if (segundos < 10) {
    segundos = `0${segundos}`;
  } */

  let texto;

  if (horas >= 6 && horas < 14) {
    texto = "Buenos Días";
  } else if (horas >= 14 && horas < 20) {
    texto = "Buenas Tardes";
  } else {
    texto = "Buenas noches";
  }

  document.getElementById("reloj").innerHTML = `<h2>Ahora mismo son \n\
    ${horas} : ${minutos}: ${segundos}. ${texto} </h2>`;
};

setInterval(muestraReloj, 1000);

//ejercicio 10
// var direccion = window.prompt("introduce una nueva direccion HTML para la ventana principal");
// var pattern = /^(http|https?:\/\/)? [a-z0-9\.-]+\.[a-z]{2,4}/;

//     if(direccion.match(pattern)){
//         window.opener.location.replace(direccion);
//     }

var error = "";
var direccion = "";

var pattern = /^(http|https):\/\/[a-z0-9\.-]+\.[a-z]{2,9}$/;

do {
  var direccion = prompt(
    `${error} introduce una nueva direccion HTML para la ventana principal`
  );
  error = "Error!!!";
  let comprobar = direccion.match(pattern);
} while (!comprobar);
window.opener.location.replace(direccion);

//Ejercicio 10
/*function redireccion() {
    window.opener.location.assign("http://www.w3schools.com"); 
}*/
/*function redireccion1() {
    window.location.assign("http://www.w3schools.com"); 
}
/*
var ventanaPadre= window.opener;
var  ventanaPadre= confirm("Si haces clik en aceptar te redireccionaremos a w3schools");
if(ventanaPadre){
    redireccion();
}*/

/*var  r= confirm("Si haces clik en aceptar te redireccionaremos a w3schools");
if(r){
    redireccion1();
}
*/
