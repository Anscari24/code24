/* import hacerAlgo, { propiedad } */
import palabra from "./script.js";

let pal = palabra;
console.log(pal);
/* import { maxErrores, palabra, letrasCorrectas, letrasIncorrectas } from "./script.js"; */
export const msg = [
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}. Has ganado, pero en realidad has perdido (tu tiempo)`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}. Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Deja de jugar a esto y prueba a lamer un ladrillo`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}. Este juego no tiene secretos para ti`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Un gallifante para ti!!`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Has ganado un chorizo poco chupado`
];

export const msgError = [
  "Has fallado. Esto es demasiado para un... como tú",
  "Has fallado OTRA VEZ!!!. Deberías dedicar tu tiempo a otras cosas",
  "Has fallado. Las adivinanzas no son lo tuyo!!!",
  "Has fallado.... Zumo de Gato",
  "Has fallado por no leer bien la pista ... más fácil no puede ser esto!!! ",
  "Has fallado ... y resulta que las cosas no son lo que parecen"
];