/* Ejercicio 1
Crea un nuevo documento HTML con un script que a partir de un interactivo nos muestre el ancho de pantalla, alto de pantalla y diagonal de pantalla en pixels. Math.pow(num,2)//num al cuadrado*/
const btn_ejer1 = document.querySelector("#btn_ejer1");
const mostra_ejer1 = document.querySelector("#mostra_ejer1");
btn_ejer1.onclick = () => {
      let resposta = `  <div class="w3-panel w3-pale-green">
                              <p>El ancho de tu pantalla es: ${window.innerWidth}</p>
                              <p>El alto de tu pantalla es: ${window.innerHeight}</p>
                              <p>La diagonal de tu pantalla es: ${Math.round(Math.sqrt(screen.width * screen.width + screen.height * screen.height))}</p>
                        </div>
                        <div class="w3-panel w3-pale-green">
                              <p>El ancho de tu pantalla es: ${screen.width}</p>
                              <p>El alto de tu pantalla es: ${screen.height}</p>
                               <p>La diagonal de tu pantalla es: ${Math.round(Math.sqrt(screen.width * screen.width + screen.height * screen.height))}</p>
                        </div>`;

      mostra_ejer1.innerHTML = resposta;
};

/* Ejercicio 2
Construye un programa que accionemos con un botón y calcule un número aleatorio del 1 al 10 y lo muestre en una div del html. */
const btn_ejer2 = document.querySelector("#btn_ejer2");
const mostra_ejer2 = document.querySelector("#mostra_ejer2");
btn_ejer2.onclick = () => {

      let resposta = `  <div class="w3-panel w3-pale-green">
                              <p>El número aleatorio es: ${Math.floor((Math.random() * 10) + 1)}</p>
                        </div>`;

      mostra_ejer2.innerHTML = resposta;
};

/* Ejercicio 3
Escribe un programa que pida por control de texto una frase y si es mas largo de 10 carácteres, extrae los últimos 5 y muestralos en pantalla. 
*/
const btn_ejer3 = document.querySelector("#btn_ejer3");
const input_frase = document.querySelector("#input_frase");
const mostra_ejer3 = document.querySelector("#mostra_ejer3");
btn_ejer3.onclick = () => {
      let text = input_frase.value;
      let resposta = "";
      if (text.length > 10) {
            resposta = `<div class="w3-panel w3-pale-green">
                                    <p>Texto introducido: ${text} y la extracción es: ${text.substr(text.length - 5, 5)}</p>
                        </div>`;
            input_frase.value = "";
            input_frase.focus();
      }
      else {
            resposta = `<div class="w3-panel w3-red">
                              <p>El texto introducido debe superar los 10 carácteres</p>
                        </div>`;
            input_frase.focus();
      }
      mostra_ejer3.innerHTML = resposta;
};

/* Ejercicio 4
A partir del método bgColor del document(cambia_color.html) construye un html que permita en un select, seleccionar un color de cuatro y con un botón que reasigne a la página a ese color de fondo.
*/

/* function cambiarColor() {
  var select = document.getElementById("colorSelect");
  var color = select.value;
  
  document.body.style.backgroundColor = color;
}

window.onload = function() {
  var select = document.createElement("select");
  select.id = "colorSelect";
  
  var opciones = [
    { valor: "red", color: "Rojo" },
    { valor: "green", color: "Verde" },
    { valor: "blue", color: "Azul" },
    { valor: "yellow", color: "Amarillo" }
  ];
  
  for (var i = 0; i < opciones.length; i++) {
    var option = document.createElement("option");
    option.value = opciones[i].valor;
    option.text = opciones[i].color;
    select.appendChild(option);
  }
  
  select.addEventListener("change", cambiarColor);
  
  document.body.appendChild(select);
}; */


const salidaselect = document.getElementById("salidaselect");
const body = document.querySelector("body");
const colores = [
      ["Azul", "w3-light-blue"],
      ["Rojo", "w3-red"],
      ["Amarillo", "w3-yellow"],
      ["Violeta", "w3-purple"]
];
// Función para crear un select
const crearSelect = (elementos, lugar_salida, id_select, texto_opcion_defecto = "Selecciona una opción", funcion_onChange = false) => {
      let salida_html_select = "";
      salida_html_select += `<select class="w3-select w3-border" name="${id_select}" id="${id_select}">
                                    <option value="" disabled selected>${texto_opcion_defecto}</option>`;
      elementos.forEach((element) => {
            salida_html_select += `<option value="${element[1]}">${element[0]} </option>`;
      });
      salida_html_select += `</select>`;
      lugar_salida.innerHTML = salida_html_select;

      let select_bgColor = document.getElementById(id_select);

      if (funcion_onChange != false) {
            select_bgColor.onchange = funcion_onChange;
      }
};
const metodo_onChangeSelect = () => {
      body.className = "";
      body.classList.add(select_bgColor.value);
}
crearSelect(colores, salidaselect, "select_bgColor", "Selecciona el color de Fondo", metodo_onChangeSelect);

/* Ejercicio 5
Escribe un html que permita abrir desde un botón, una ventana controlada desde javascript , escribiendo el html necesario para mostrar un texto con las propiedades utilizadas y un botón que permita cerrar la nueva ventana.
*/
const btn_ejer5 = document.getElementById("btn_ejer5");
const input_texto_ventana = document.querySelector("#input_texto_ventana");
const mostra_ejer5 = document.getElementById("mostra_ejer5");
btn_ejer5.onclick = () => {
      let msg_error = `<div class="w3-panel w3-red">
                              <p>Debes introducir un texto</p>
                        </div>`;
      mostra_ejer5.innerHTML = "";
      if (input_texto_ventana.value != "") {
            let content_window = `<h2>${input_texto_ventana.value}</h2> <br>
                                    <button onclick="window.close();">Cierrame!!</button>`;
            let new_window = window.open("", "MsgWindow", "top=500,left=500,width=400,height=400");
            new_window.document.write(content_window);
            input_texto_ventana.value = ""
      }
      else {
            mostra_ejer5.innerHTML = msg_error;
      }
};
/* Ejercicio 6
Haz un programa que te permita desde un botón, encender o apagar una imagen de una bombilla según los gif’s dados.
*/
const btn_ejer6 = document.getElementById("btn_ejer6");
const img_bombilla = document.getElementById("img_bombilla");
btn_ejer6.onclick = () => {
      if (img_bombilla.src.includes("apagada")) {
            img_bombilla.src = img_bombilla.src.replace("apagada", "encendida");
      }
      else {
            img_bombilla.src = img_bombilla.src.replace("encendida", "apagada");
      }
};

/* Ejercicio 7
Escribe un html que pida por un input de texto, un texto, guárdalo como un objeto String y que nos permita saber el número de caracteres escritos, que nos permita re- escribirlo en cursiva, en negrita, en color rojo, a un tamaño muy grande, y finalmente tachado.
*/
const btn_ejer7 = document.getElementById("btn_ejer7");
const input_texto_formateo = document.getElementById("input_texto_formateo");
const mostra_ejer7 = document.getElementById("mostra_ejer7");
btn_ejer7.addEventListener("click", () => {
      let text = input_texto_formateo.value;

      if (text.length > 0 && text != "") {
            let salida_texto_formateo =
                  `<div class="w3-panel w3-pale-green">
                        <p>El texto introducido es: ${text} * Nº de caracteres: ${text.length} *</p>
                        <p> <span style="font-style:oblique">${text}</span> * En Cursiva *</p>
                       <p> <strong>${text}</strong> * En Negrita *</p>
                        <p> <span style="color: red;">${text}</span> * En Color Rojo *</p>
                        <p> <span style="font-size: 30px">${text}</span> * A un tamaño muy grande *</p>
                        <p> <span style="text-decoration:line-through;">${text}</span> * Tachado *</p>
            </div>`;

            mostra_ejer7.innerHTML = salida_texto_formateo;

      }
      else {
            mostra_ejer7.innerHTML = `<div class="w3-panel w3-red">
                                          <p>Debes introducir un texto para formatearlo!</p>
                                    </div>`;
            input_texto_formateo.focus();
      }
});

/* Ejercicio 8
Escribe un programa que permita escribir una tabla con cuatro celdas (dos filas y dos columnas), con bordes colapsados y un texto en cada celda.
*/
const btn_ejer8 = document.querySelector("#btn_ejer8");
const btn_ejer8_borrar = document.querySelector("#btn_ejer8_borrar");
const input_filas = document.querySelector("#input_filas");
const input_columnas = document.querySelector("#input_columnas");
const mostra_ejer8 = document.querySelector("#mostra_ejer8");

btn_ejer8.addEventListener("click", () => {
      let filas = Math.round(Number(input_filas.value));
      let columnas = Math.round(Number(input_columnas.value));
      if (isNaN(filas) == true || isNaN(columnas) == true || filas <= 0 || columnas <= 0) {
            mostra_ejer8.innerHTML = `<div class="w3-panel w3-red">
                                          <p>Debes introducir un número tanto para las Filas como para las Columnas!</p>
                                    </div>`;
      }
      else {
            let salida_tabla = `<table class="w3-table w3-striped w3-border w3-hoverable w3-margin-bottom w3-margin-top">`;
            for (let x = 0; x < filas; x++) {
                  salida_tabla += `<tr>`;
                  for (let y = 0; y < columnas; y++) {
                        salida_tabla += `<td contenteditable> Escribe aquí </td>`;
                  }
                  salida_tabla += `</tr>`;
            }
            salida_tabla += `</table>`;

            mostra_ejer8.innerHTML = salida_tabla;
            //.style.display = "none"
            btn_ejer8_borrar.style.display = "inline-block";

      }
});
btn_ejer8_borrar.addEventListener("click", () => {
      mostra_ejer8.innerHTML = "";
      btn_ejer8_borrar.style.display = "none";
      input_filas.value = "";
      input_columnas.value = "";
});

/* Ejercicio 9
Crea un programa que permita saber en milisegundos cuando acabó el mundo según el calendario Maya, recoge además el día, mes, año, hora, minutos, segundos actuales y día de la semana. 21 de Diciembre del 2012
*/
const btn_ejer9 = document.querySelector("#btn_ejer9");
const mostra_ejer9 = document.querySelector("#mostra_ejer9");
btn_ejer9.addEventListener("click", () => {
      let mayasmuerto = new Date(2012, 12, 21, 0, 0);
      let fecha_actual = new Date();
      let dia_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      let salida_fecha = `<div class="w3-panel w3-pale-green">
                              <p>Milisegundos desde que cascaron los Mayas: ${fecha_actual - mayasmuerto}</p>
                              <p>Día: ${fecha_actual.getDate()} Mes: ${fecha_actual.getMonth() + 1} Año: ${fecha_actual.getFullYear()} Hora: ${fecha_actual.getHours()} Minutos: ${fecha_actual.getMinutes()} Segundos: ${fecha_actual.getSeconds()}</p>
                              <p>Día de la semana: ${dia_semana[fecha_actual.getUTCDay()]}</p>
                        </div>`;
      mostra_ejer9.innerHTML = salida_fecha;
});

/* Ejercicio 10
Haz un programa que te permita entrar con un control de texto la base de un triángulo, luego la altura en otro, y muestra su área en pantalla. Crea también un boton para ejecutar el cálculo y otro para borrar los datos y el resultado. 
*/
const btn_ejer10 = document.querySelector("#btn_ejer10");
const btn_ejer10_borrar = document.querySelector("#btn_ejer10_borrar");
const input_base = document.querySelector("#input_base");
const input_altura = document.querySelector("#input_altura");
const mostra_ejer10 = document.querySelector("#mostra_ejer10");
btn_ejer10.addEventListener("click", () => {
      let base = Number(input_base.value);
      let altura = Number(input_altura.value);
      console.log(base);
      console.log(altura);
      if (isNaN(base) == true || isNaN(altura) == true || base <= 0 || altura <= 0) {
            mostra_ejer10.innerHTML = `<div class="w3-panel w3-red">
                                          <p>Debes introducir un valor númerico tanto para la altura como para la base y superior a 0!</p>
                                    </div>`;
      }
      else {

            mostra_ejer10.innerHTML = `<div class="w3-panel w3-pale-green">
                              <p>El area del triángulo es: ${(base * altura) / 2}</p>
                        </div>`;
            btn_ejer10_borrar.style.display = "inline-block";

      }
});
btn_ejer10_borrar.addEventListener("click", () => {
      mostra_ejer10.innerHTML = "";
      btn_ejer10_borrar.style.display = "none";
      input_altura.value = "";
      input_base.value = "";
});
/* Ejercicio 11
      Haz un programa que abra una etiqueta &lt;dialog> y muestre un reloj funcional con la fecha de hoy,
                  horas, minutos y segundos.Ajusta el formato de los valores menores a 10 a dos dígitos con el 0
                  delante. Crea un botón o rango temporal que cierre el reloj.
*/

/* https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog */
/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */
/* Problema con dialog: no podemos usar tabinde */
const btn_ejer11 = document.querySelector("#btn_ejer11");
const mostra_ejer11 = document.querySelector("#mostra_ejer11");
const dialogo = document.querySelector('dialog');
const muestra = document.querySelector("#mostra");
btn_ejer11.addEventListener("click", () => {

      const zero = function (num) {
            let s = "0" + num;
            return s.substring(s.length - 2);
            /* return s; */
      }


      /*   dialogo.open = true; */
      dialogo.show();

      const reloj = setInterval(() => {
            let fecha = new Date();
            let mostra = `${zero(fecha.getDate())} - ${zero(fecha.getMonth() + 1)} - ${fecha.getFullYear()} || ${zero(fecha.getHours())}h. : ${zero(fecha.getMinutes())}m. : ${zero(fecha.getSeconds())}s.<br><br><button onclick="dialogo.close();">Close dialog</button> `;
            dialogo.innerHTML = mostra;
      }, 1000);
      setTimeout(() => clearInterval(reloj), 10000);
      setTimeout(() => dialogo.close(), 15000);

}); 