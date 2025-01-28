const diahora = function reloj() {
  let reloj = new Date();
  let horas = reloj.getHours();
  let minutos = reloj.getMinutes();
  let segundos = reloj.getSeconds();

  document.getElementById(
    "mostra"
  ).innerHTML = `Hora: ${horas} - minutos :${minutos} - segundos: ${segundos} `;
};
setInterval(diahora, 1000);
//window.onload = diahora;
