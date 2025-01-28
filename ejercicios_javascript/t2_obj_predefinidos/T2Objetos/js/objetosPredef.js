//Ejercicio 3
function salir() {
  location.assign("https://www.w3schools.com");
}

if (navigator.cookieEnabled) {
  let r = confirm(
    "El uso de cookies está activado.\nPermanecer en esta web conlleva aceptar el uso de cookies"
  );
  if (!r) salir();
} else {
  //no estan habilitadas
  let r = confirm(
    "El uso de cookies está desactivado.\nPermanecer en esta web conlleva aceptar el uso de cookies"
  );
  if (!r) salir();
}

//Ejercicio 4
let titol;
do {
  titol = prompt("Introduce un título para la página, por favor: ");
  //falta un replace a barra espaciadora
} while (titol === "" || titol === "undefined");
titol = titol.toUpperCase();
window.document.title = titol;

/*
 
var titol=false;
 do{
     var titol = window.prompt("dame un título");
     //window.alert(typeof(titol));
}
while(typeof(titol) !== "string" || titol ===' ');
titol = titol.toUpperCase();
window.document.title=titol;

var titol=null;
while(titol===null || titol===""){
 titol =window.prompt("Introduce un título 
para la página, por favor: ");   
}
 titol=titol.toUpperCase();
 window.document.title = titol;
 */
//Ejercicio 6
let titulo;
let barra;

do {
  /*   alert(
    "A continuación introcudirás dos textos separados por (,). El primer fragmento de texto con valor 'titulo' debe contener entre 3 y 20  caracteres. El segundo, con valor 'barra' debe contener o 'yes' o ''no"
  ); */

  let texto = prompt(
    "A continuación introcudirás dos textos separados por (,). El primer fragmento de texto con valor 'titulo' debe contener entre 3 y 20  caracteres. El segundo, con valor 'barra' debe contener o 'yes' o ''no"
  );
  titulo = texto.substring(0, texto.lastIndexOf(","));
  barra = texto.substring(texto.lastIndexOf(",") + 1, texto.length);
} while (
  titulo.length < 3 ||
  titulo.length > 20 ||
  (barra !== "yes" && barra !== "no")
);

//Ejercicio 7 y 8
let w = Math.floor(Math.random() * 400) + 200;
let h = Math.floor(Math.random() * 400) + 200; //aleatorio entre 50 y 200
/* let abrirVentana = function abrirVentana() {
  open(
    "ventana.html",
    "abrirVentana",
    "scrollbars=no,width=" + w + ",height=" + h + ""
  );
};

window.setTimeout(() => {
  abrirVentana.document.title = titol;
}, 3000); */
if (barra == "no") {
  document.querySelectorAll("html")[0].style.overflow = "hidden";
} else {
  barra = "yes";
}
var myWindow = window.open(
  "ventana.html",
  `"${titulo}"`,
  `"scrollbars=${barra},width=${w},height=${h}"`
);

/* window.onload = setTimeout(() => {
  open(
    "ventana.html",
    `"${titulo}"`,
    `"scrollbars=${barra},width=${w},height=${h}"`
  );
}, 4000); */
/* myWindow.getElementsByTagName("body")[0].style.overflow = "hidden"; */

//Ejercicio 2
const tbl = document.querySelector("#tabla");
const taula = document.querySelector("#taula");
const crTabla = document.querySelector("#creaTaula");
const borrar = document.querySelector("#borra");

let min = Number.MIN_VALUE;
let max = Number.MAX_VALUE;
let ruta = location.pathname;
let pos = ruta.lastIndexOf("/");
let pos1 = ruta.length;
/*var pos2=ruta.lastIndexOf(".");*/ let scrh = screen.height;

const tabla = () => {
  document.querySelector(
    "#dtabla"
  ).innerHTML = `<table><tr><th id='uno'>PROPIEDAD</th><th id='dos'>VALOR OBTENIDO CON JS</th>
    </tr>
    <tr>
        <td>Valor máximo que puede tener un número en JavaScript</td>
        <td>${max}</td>
    </tr>
    <tr>
        <td>Valor mínimo que puede tener un número en JavaScript</td>
        <td>${min}</td>
    </tr>
    <tr>
        <td>Altura total de la pantalla</td>
        <td>${scrh}</td>
    </tr>
    <tr>
        <td>Anchura total de la pantalla</td>
        <td>${screen.width}</td>
    </tr>
    <tr>
    <tr>
        <td>Altura total de la página ${window.innerHeight}</a web</td>
        <td>${screen.availHeight} td>
    </tr>
    <tr>
        <td>Anchura total de la página</td>
        <td>${screen.availWidth} - ${window.innerWidth}</td>
    </tr>
    <tr>
        <td>URL de la página web</td>
        <td>${window.location.href} - ${window.location.pathname}</td>
    </tr>
    <tr>
        <td>Nombre de la página web con su extensión (index.html)</td>
        <td>${ruta.substring(pos + 1, pos1)}</td>
    </tr>
    <tr>
        <td>Nombre de la página web sin su extensión (index)</td>
        <td>${ruta.substring(pos + 1, 5)}</td>
    </tr>
    <tr>
        <td>Un valor aleatorio entre 0 y 200 <span>Incluidos</span> (utiliza el objeto Math)</td>
        <td>${Math.round(Math.random() * 200 + 1)}</td>
    </tr>
    <tr>
        <td>Sistema operativo del ordenador.</td>
        <td>${navigator.userAgent}</td>
    </tr></table>`;
};

const taulaPlena = () => {
  let taula =
    "<table><tr><th id='uno'>PROPIEDAD</th><th id='dos'>VALOR OBTENIDO CON JS</th></tr>";
  let columnes = 2;

  let ctd = 0;
  let cfiles = 0;
  let contTextes = 0;
  let max = Number.MAX_VALUE;
  let min = Number.MIN_VALUE;
  let hpantalla = screen.height;

  let textos = [
    "Valor máximo que puede tener un número en JavaScript",
    max,
    "Valor mínimo que puede tener un número en JavaScript",
    min,
    "Altura total de la pantalla",
    hpantalla + " px",
    "Anchura total de la pantalla",
    screen.width + " px",
    "Altura de la página web",
    screen.availHeight + " px",
    "Anchura de la página web ",
    screen.availWidth + " px",
    "URL de la página web",
    window.location.href,
    "Nombre de la página web con su extensión (index.html)",
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
    "Nombre de la página web sin su extensión (index)",
    location.pathname
      .substring(location.pathname.lastIndexOf("/") + 1)
      .slice(0, -5),
    "Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)",
    Math.floor(Math.random() * 200) + 50,
    "Sistema operativo del ordenador.",

    (txt = `<p>Browser CodeName: ${navigator.userAgent}</p><p>Browser Name: ${navigator.userAgent}</p><p>Browser Version: ${navigator.userAgentn}</p><p>Cookies Enabled: ${navigator.cookieEnabled}</p><p>Platform:${navigator.userAgent}</p><p>User-agent header: ${navigator.userAgent}</p>`),
  ];
  let files = textos.length / 2;
  while (cfiles < files) {
    taula += "<tr>";
    while (ctd < columnes) {
      taula += "<td>" + textos[contTextes] + "</td>";
      ctd++;
      contTextes++;
    }
    taula += "</tr>";
    ctd = 0;
    cfiles++;
  }
  taula += "</table>";
  document.querySelector("#dtaula").innerHTML = taula;
};

const tableCreate = () => {
  let contador = 0;
  let cont = 0;
  let textoth = ["PROPIEDAD", "VALOR OBTENIDO CON JS"];
  let textos = [
    "Valor máximo que puede tener un número en JavaScript",
    max,
    "Valor mínimo que puede tener un número en JavaScript",
    min,
    "Altura total de la pantalla",
    screen.height + " px",
    "Anchura total de la pantalla",
    screen.width + " px",
    "Altura de la página web",
    screen.availHeight + " px",
    "Anchura de la página web ",
    screen.availWidth + " px",
    "URL de la página web",
    window.location.href,
    "Nombre de la página web con su extensión (index.html)",
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
    "Nombre de la página web sin su extensión (index)",
    location.pathname
      .substring(location.pathname.lastIndexOf("/") + 1)
      .slice(0, -5),
    "Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)",
    Math.floor(Math.random() * 200) + 0,
    "Sistema operativo del ordenador.",
    navigator.userAgent,
  ];

  //obtenemos el id de la div
  let creaTbl = document.querySelector("#dcreaTabla");
  //creamos tabla
  let tbl = document.createElement("table");
  let filath = document.createElement("tr");
  for (let x = 0; x < 2; x++) {
    let cth = document.createElement("th");

    let titth = document.createTextNode(textoth[cont]);
    cont++;
    cth.setAttribute("id", "id_" + (x + 1));

    // var cellText = document.createTextNode("cell is row " + j + ", column " + i);
    cth.appendChild(titth);
    filath.appendChild(cth);
    tbl.appendChild(filath);
  }

  //creamos celdas
  for (let j = 0; j < textos.length / 2; j++) {
    // filas para la tabla
    let fila = document.createElement("tr");
    for (let i = 0; i < 2; i++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      let celda = document.createElement("td");
      let textoCelda = document.createTextNode(textos[contador]);
      contador++;
      // var cellText = document.createTextNode("cell is row " + j + ", column " + i);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tbl.appendChild(fila);
  }

  // posiciona el <tbody> debajo del elemento <table>
  // tbl.appendChild(tblBody);
  //<table> dentro del Id
  creaTbl.appendChild(tbl);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  // tbl.setAttribute("border", "1");
};

const borraTabla = () => {
  tbl.innerHTML = "";
  taula.innerHTML = "";
  creaTabla.innerHTML = "";
};
borrar.onclick = borraTabla;
tbl.onclick = tabla;
taula.onclick = taulaPlena;
crTabla.onclick = tableCreate;
