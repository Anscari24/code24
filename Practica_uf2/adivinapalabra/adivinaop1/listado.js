import {
  inputs,
  pistaTag,
  pRestantes,
  letraEquivocada
} from "./script.js";

export { palabraAleatoria, palabra };

const listado = [
  {
    palabra: "javascript",
    pista: "Lenguaje con el que se ha escrito este programa",
  },
  {
    palabra: "android",
    pista: "S.O. que lleva mi teléfono móvil",
  },
  {
    palabra: "manitou",
    pista: "Marca de tabaco que fumo",
  },
  {
    palabra: "kombucha",
    pista: "Té fermentado que esta rico que te mueres",
  },
  {
    palabra: "rosal",
    pista: "Planta que ta flores rojas,amarillas y más",
  },
  {
    palabra: "typescript",
    pista: "Lenguaje con el que no se ha escrito este programa",
  },
  {
    palabra: "mechero",
    pista: "Artilugio para encender la cocina",
  },
  {
    palabra: "python",
    pista: "Una lenguaje de programación que tiene como logo una serpiente",
  },
  {
    palabra: "penne",
    pista: "Macarrón alargado",
  },
  {
    palabra: "teclado",
    pista: "Sirve para escribir en un ordenador",
  },
  {
    palabra: "utabon",
    pista: "Desatasca narices",
  },
  {
    palabra: "ventilador",
    pista: "Mueve el aire y da vueltas",
  },
  {
    palabra: "php",
    pista: "Lenguaje de programación del lado del servidor",
  },
  {
    palabra: "silla",
    pista: "Pones tu culo sobre ella",
  },
  {
    palabra: "yestoestodoamigos",
    pista: "Página web de unos amigos",
  },
  {
    palabra: "twitter",
    pista: "Era una red social con un pájaro",
  },
  {
    palabra: "whatsapp",
    pista: "Envias mensajes instantaneos desde esta APP",
  },
  {
    palabra: "mogadiscio",
    pista: "Capital de Somalia",
  },
  {
    palabra: "electricidad",
    pista: "Su precio está por las nubes",
  }
];
let maxErrores,
  letrasCorrectas = [],
  letrasIncorrectas = [];

let palabra = "";
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
}
palabraAleatoria();



