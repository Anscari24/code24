let mostra;

const taulaplena = () => {
  let taula = ` <table><tr><th id='uno'>PROPIEDAD</th><th id='dos'>VALOR OBTENIDO CON JS</th></tr>`;
  console.log(taula);
  let columnes = 2;

  let ctd = 0; //cel.les
  let cfiles = 0; //files
  let contTextes = 0; //Per definir posicions dels textes

  let textos = [
    "Valor máximo que puede tener un número en JavaScript",
    Number.MAX_VALUE,
    "Valor mínimo que puede tener un número en JavaScript",
    Number.MIN_VALUE,
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
    Math.floor(Math.random() * 200) + 50,
    "Sistema operativo del ordenador.",
    navigator.userAgent,
  ];

  let files = textos.length / 2;

  while (cfiles < files) {
    taula += "<tr>";
    while (ctd < columnes) {
      taula += "<td>" + textos[contTextes] + "</td>";
      ctd++; //aumenta celda y texto array
      contTextes++;
    }
    taula += "</tr>";
    ctd = 0; //devuelvo las celdas a 0
    cfiles++; //nueva fila
  }
  taula += "</table>";

  mostra = document.querySelector("#mostra");
  mostra.innerHTML = taula;
};

//---------------------

const borrar = () => {
  mostra.innerHTML = "";
};

const construye = document.querySelector("#construir");
construye.onclick = taulaplena;

const elimino = document.querySelector("#eliminar");
elimino.onclick = borrar;
