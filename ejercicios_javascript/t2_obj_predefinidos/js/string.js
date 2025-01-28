let valor = document.getElementById("texto");
let original;
let mostra = document.getElementById("mostra");

let transformar = function transformar() {
  //  let original = prompt("Introduce un texto para maltratarlo");
  //   valor = document.getElementById("texto");
  original = valor.value;
  let maltratado = String(original);
  mostra.innerHTML = `
            Texto original: ${original}.<br/>
            Largo total en carácteres: ${maltratado.length}.<br/>
            Texto en cursiva: ${maltratado.italics()}. <br/>
            Texto en bold: ${maltratado.bold()}. <br/>
            Texto en Rojo: ${maltratado.fontcolor("#ff0000")}. <br/>
            Texto en mayor tamaño: ${maltratado.fontsize(7)}. <br/>
            Texto tachado: ${maltratado.strike()}. <br/>
            `;
};

const borrar = function eliminar() {
  valor.value = "";
  mostra.innerHTML = "";
};

const btn = document.getElementById("converse");
btn.onclick = transformar;

const elimino = document.getElementById("eliminar");
elimino.onclick = borrar;
