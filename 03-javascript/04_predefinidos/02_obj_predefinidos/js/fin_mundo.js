function calcularMilisegundosDesdeFinMundoMaya() {
  let fechaFinMundoMaya = new Date(2012, 11, 21); // Fecha del supuesto fin del mundo según el calendario Maya
  let fechaActual = new Date();

  let diferencia = fechaActual - fechaFinMundoMaya;
  let milisegundos = Math.abs(diferencia);

  return milisegundos;
}

function calcularTiempoTranscurrido() {
  /*   let fechaFinMundoMaya = new Date(2012, 11, 21); // Fecha del supuesto fin del mundo según el calendario Maya */
  let fechaFinMundoMaya = new Date(2020, 6, 21); // Fecha del supuesto fin del mundo según el calendario Maya
  let fechaActual = new Date();

  let diferencia = fechaActual - fechaFinMundoMaya;

  let años = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  let meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  let dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  return { años, meses, dias, horas, minutos, segundos };
}

// Obtener el elemento <div> por su ID
let divResultado = document.getElementById("resultado");

// Calcular los milisegundos y el tiempo transcurrido
let milisegundos = calcularMilisegundosDesdeFinMundoMaya();
let tiempoTranscurrido = calcularTiempoTranscurrido();

// Mostrar los resultados en el <div>
divResultado.innerHTML = `El fin del mundo según el calendario Maya: En milisegundos ${milisegundos}<br>
                         Tiempo transcurrido desde el fin del mundo según el calendario Maya: <br>
                          Años:  ${tiempoTranscurrido.años}<br>
                          Meses: ${tiempoTranscurrido.meses}<br>
                          Días: ${tiempoTranscurrido.dias}<br>
                         Horas: ${tiempoTranscurrido.horas}<br>
                         Minutos: ${tiempoTranscurrido.minutos}<br>
                         Segundos: ${tiempoTranscurrido.segundos}`;