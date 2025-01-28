// Reglas para variables var y let
var nombre = "Contenido"; //Variables de ámbito global.
// Se pueden redeclarar, sú ámbito pertenece a toda la aplicación y una vez declaradas, siempre ocupan memoria.
var nombre = "contenido2";
nombre = "contenido3"; //se puede reasignar
console.log(nombre);

let monitor = "Pantalla Ordenador 21 pulgadas"; // Inicializamos  variable con  valor de tipo let cuyo ámbito es de bloque. Se entiende por bloque el juego de { } al que pertenece. Una vez usada su memoria se libera.
//let monitor = "Pantalla Ordenador 26 pulgadas"; // No se pueden redeclarar;
console.log(monitor);

// var y let,  se pueden reasignar
monitor = "Pantalla Ordenador 26 pulgadas";
console.log(monitor);

// Podemos cambiar el tipo de dato
monitor = 20;
console.log(monitor);
monitor = false;
console.log(monitor);
monitor = null;
console.log(monitor);

// Javascript es un lenguaje de tIpo Dinámico. No se especifican tipos de datos cuando se crea la variable, sino al asignar el valor. Lenguaje de tipado débil. (Permite por ejemplo no acabar las sentencias con "; " y lo da por supuesto)
let precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo despué
let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

// Inicializar múltiples variables
let tipo = "sobreMesa",
  fabricante = "sin nombre",
  valoracion = 5;

console.log(tipo);
console.log(fabricante);
console.log(valoracion);

// Reglas de las variables:

// Pueden tener: letras, números, _ No pueden iniciar con número
/* let 99num; */
let dias99;

let _01;
/* let 01_; */

// Nombrar variables con más de una palabra
let nombreProducto = "Monitor 30 Pulgadas"; // CamelCase  habitual en funciones, arreglos y variables

let nombre_producto = "Monitor 30 Pulgadas"; //underscore habitual en variables
let NombreProducto = "Monitor 30 Pulgadas"; // pascal case habitual en Objetos, classes
let nombreproducto = "Monitor 30 Pulgadas"; // habitual en variables
