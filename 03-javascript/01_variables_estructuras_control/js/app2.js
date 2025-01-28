// Veamos otro tipo de formas de crear variables, variables de tipo constante: const
// Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: En una variable con const su valor no puede ser re-asignado , debe inicializarse con un valor,nunca undefined, suele escribirse en UPPERCASE.

/* const precio; */
const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla 19Pulgadas";
console.log(mo);
/* mo = 'Monitor 23 Pulgadas'; no puede reasignarse */
console.log(mo);

// Existen otras diferencias entre const y let especialmente cuando se trabajan con arrays y objetos, osea, con datos complejos.
// Mientras mantengan la estructura del contenido o Referencia, pueden sufrir modicicaciones en los valores. Recuerda: las variables con const no se pueden re-asignar y tampoco pueden iniciar sin un valor.
/* Ejemplo:
const nom = function nombre() {
  let nombre = prompt("Introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.querySelector("#mostrar3").innerHTML = `${nombre} es mi nombre`;
}; */
