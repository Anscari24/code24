// script.js
import { listado } from "./listado.js";
import { msg, msgError } from "./mensajes.js";

const inputs = document.querySelector(".inputs"),
  pistaTag = document.querySelector(".pista span"),
  pRestantes = document.querySelector(".restantes span"),
  letraEquivocada = document.querySelector(".letrasErroneas span"),
  resetBtn = document.querySelector(".reset-btn"),
  lletraInput = document.querySelector(".lletra");

// Variables de alcance limitado a un bloque
let maxErrores, palabra,
  letrasCorrectas = [],
  letrasIncorrectas = [];

// Selección aleatoria de la palabra a adivinar
function palabraAleatoria() {
  // Definimos para conseguir un item aleatorio
  let itemAleatorio = listado[Math.floor(Math.random() * listado.length)];
  palabra = itemAleatorio.palabra;
  maxErrores = palabra.length >= 5 ? 8 : 6;
  letrasCorrectas = [];
  letrasIncorrectas = [];
  pistaTag.innerText = itemAleatorio.pista;
  pRestantes.innerText = maxErrores;
  letraEquivocada.innerText = letrasIncorrectas;
  // cajas para escribir el texto
  let html = "";
  for (let i = 0; i < palabra.length; i++) {
    html += `<input type="text">`;
    inputs.innerHTML = html;
  }
  console.log(palabra);
  return palabra;
}

palabraAleatoria();

// Inicio del juego
function init(e) {
  //convertimos a minúsculas el valor
  let key = e.target.value.toLowerCase();
  // Hacemos que se escriban solo letras y si son correctas o incorrectas
  if (
    key.match(/^[A-Za-zÀ-ÿ]+$/) &&
    !letrasIncorrectas.includes(key) &&
    !letrasCorrectas.includes(key)
  ) {
    // Letras correctas
    if (palabra.includes(key)) {
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == key) {
          letrasCorrectas += key;
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      // Letras incorrectas
      maxErrores--;
      letrasIncorrectas.push(`${key}`);
      console.log(letrasIncorrectas);
    }
    pRestantes.innerText = maxErrores;
    letraEquivocada.innerText = letrasIncorrectas;
  }
  lletraInput.value = "";
  checkStatus();
}

// Llamadas
const handleSuccess = () => {
  let rndMsg = Math.floor(Math.random() * msg.length);
  alert(msg[rndMsg]);
  pRestantes.innerText = "haz click en Volver a empezar";
  letraEquivocada.innerText = "Has ganado";
}

const handleError = () => {
  let rndError = Math.floor(Math.random() * msgError.length);
  alert(msgError[rndError]);
  pRestantes.innerText = 0;
  letraEquivocada.innerText = "No tienes mas intentos";
  for (let i = 0; i < palabra.length; i++) {
    // Mostramos la palabra oculta
    inputs.querySelectorAll("input")[i].value = palabra[i];
  }
}

function checkStatus() {
  (letrasCorrectas.length === palabra.length) ? handleSuccess() : (maxErrores < 1) ? handleError() : "";
}

// Llamadas
lletraInput.addEventListener("input", init);
document.addEventListener("keydown", () => lletraInput.focus());
resetBtn.addEventListener("click", () => { location.reload(true) });
document.addEventListener('DomContentloaded', () => {
  checkStatus();
});

export { maxErrores, letrasCorrectas, letrasIncorrectas };
// archivo A.js
/* export const propiedad = 123; */
/* export default function adivinaPalabra() { ... } */

/* Y para importar:

// archivo B.js
import hacerAlgo, { propiedad } from 'A'; */
