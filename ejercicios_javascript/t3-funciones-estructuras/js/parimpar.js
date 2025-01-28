let result, resultado;
const num = document.querySelector("#numero");
const mostra = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar = document.querySelector("#btn_limpiar");

const parimpar = () => {
  let n = num.value;
  console.log(typeof n);
  n = Number(n.replace(",", "."));
  if (isNaN(n) || n == "") {
    resultado = `<div class="alert alert-success">No puedo operar</div>`;
  } else {
    result = n % 2;
    // condicion_a_evaluar ? acción a ejecutar : (sino) acción descarte
    result !== 0
      ? (resultado = `<div class="alert alert-success">El valor introducido es un número impar, concretamente el ${n}<br/></div>`)
      : (resultado = `<div  class="alert alert-success">El valor introducido es un número par, concretamente el ${n}<br/></div>`);
  }
  mostra.innerHTML = resultado;
  num.value = "";
};

const borrando = () => {
  num.value = "";
  mostra.innerHTML = "";
};

btn1.onclick = parimpar;
/* btn1.addEventListener("click", parimpar); */
borrar.onclick = borrando;
