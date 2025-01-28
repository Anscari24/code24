
import { palabraAleatoria, palabra } from "./script.js";
/* function obtenerPalabra(palabra) {
    const palabra = palabro;
    
    return palabra;
} */

/* function iniciar() {
    // call the function to initialize the variable
    return palabra;
}
iniciar();
 */

/*  import { palabra } from "./sugerencia.js"; */
palabraAleatoria();
console.log(palabra);
export const msg = [
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}. Has ganado, pero en realidad has perdido (tu tiempo),`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}. Deja de jugar a esto y echa un Euromillón ... a ver si sales "probre"`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Deja de jugar a esto y prueba a lamer un ladrillo,`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Deja de jugar a esto y sal a tomar el aire`,
  `Enhorabuena! Encontraste la palabra ${palabra.toUpperCase()}.  Deja de jugar a esto y haz algo productivo`
];

export const msgError = [
  `Has perdido! No te preocupes, siempre puedes intentarlo de nuevo`,
  `Has perdido! No eres muy bueno en esto, ¿verdad?`,
  `Has perdido! Mejor suerte la próxima vez`,
  `Has perdido! Tal vez deberías probar otra cosa`,
  `Has perdido! Sigue practicando y mejorarás`
];

