/* alert("PopUp desde un alert escrito desde un archivo js externo"); */

document.querySelector("#mostrar").innerHTML =
  "<h2>Texto escrito dentro de la id='mostrar' desde un js externo</h2>";
document.getElementById("mostrar2").innerHTML =
  "<h3 style='font-family:Arial,sans-serif'>Texto escrito dentro de la id='mostrar2' desde un js externo</h3>";

const nom = function nombre() {
  let nombre = prompt("Introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.querySelector("#mostrar3").innerHTML = `${nombre} es mi nombre`;
};
/* document.querySelector("#btn").onclick = nom;
 */
const btn = document.querySelector("#btn");
btn.onclick = nom;
