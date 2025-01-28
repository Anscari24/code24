let nombre = "Óscar";
let apellido = "Perolillos";
//const PI = 3.1416;
const saludo = `Bienvenido ${nombre}  ${apellido} a nuestra aplicación`;
const mostra = document.querySelector("#mostra");
const mostrallista = document.querySelector("#mostrallista");

const primavera = "Primavera";
const verano = "Verano";
const otono = "Otoño";
const invierno = "Invierno";

/* const estaciones =
  "<ul><li>" +
  primavera +
  "</li><li>" +
  verano +
  "</li><li>" +
  otono +
  "</li><li>" +
  invierno +
  "</li></ul>"; */

const estaciones = `<ul>
                      <li>${primavera} </li>
                      <li> ${verano} </li>
                      <li> ${otono} </li>
                      <li> ${invierno} </li>
                    </ul>`;

mostra.innerHTML = saludo;
mostrallista.innerHTML = estaciones;
