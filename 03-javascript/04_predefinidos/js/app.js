/* function cambia(params) {
  alert(`Cambiamos color de fondo a  ${params}`);
  document.body.style.backgroundColor = params;
} */
/* alert("Cambiamos color de fondo a ROJO");
document.body.style.backgroundColor = "red";

setTimeout(() => {
  alert("Cambiamos color de fondo a VERDE");
  document.body.style.backgroundColor = "green";
}, 5000);
 */
const red = document.querySelector("#red");
/* red.onclick = () => {
  document.body.style.backgroundColor = "red";
};*/
const green = document.querySelector("#green");
/*green.onclick = () => {
  document.body.style.backgroundColor = "green";
}; */
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
