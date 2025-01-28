const listado = [
    {
      palabra: "javascript",
      pista: "Lenguaje con el que se ha escrito este programa",
    },
    {
      palabra: "android",
      pista: "S.O. que lleva mi teléfono móvil",
    },
    {
      palabra: "manitou",
      pista: "Marca de tabaco que fumo",
    },
    {
      palabra: "kombucha",
      pista: "Té fermentado que esta rico que te mueres",
    },
    {
      palabra: "rosal",
      pista: "Planta que ta flores rojas,amarillas y más",
    },
    {
      palabra: "typescript",
      pista: "Lenguaje con el que no se ha escrito este programa",
    },
    {
      palabra: "mechero",
      pista: "Artilugio para encender la cocina",
    },
    {
      palabra: "python",
      pista: "Una lenguaje de programación que tiene como logo una serpiente",
    },
    {
      palabra: "penne",
      pista: "Macarrón alargado",
    },
    {
      palabra: "teclado",
      pista: "Sirve para escribir en un ordenador",
    },
    {
      palabra: "utabon",
      pista: "Desatasca narices",
    },
    {
      palabra: "ventilador",
      pista: "Mueve el aire y da vueltas",
    },
    {
      palabra: "php",
      pista: "Lenguaje de programación del lado del servidor",
    },
    {
      palabra: "silla",
      pista: "Pones tu culo sobre ella",
    },
    {
      palabra: "yestoestodoamigos",
      pista: "Página web de unos amigos",
    },
    {
      palabra: "twitter",
      pista: "Era una red social con un pájaro",
    },
    {
      palabra: "whatsapp",
      pista: "Envias mensajes instantaneos desde esta APP",
    },
    {
      palabra: "mogadiscio",
      pista: "Capital de Somalia",
    },
    {
      palabra: "electricidad",
      pista: "Su precio está por las nubes",
    }
  ];

let errores = 0;
let pista = "";
let palabra = "";  // palabra elegida
let letras = [];  // array de letras que falta por acertar
let letras_equivocadas = [];  // array de letras que se han fallado
let btn = document.getElementById("reiniciar");

btn.addEventListener("click", function () {
    iniciar();
}
);

document.addEventListener("keyup", function (event) {
    let tecla = event.key;
    console.log(tecla);
    valida = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    valida = valida.split("");
    const palabra_array = palabra.split("");
    if (letras.includes(tecla) && valida.includes(tecla)) {
        console.log("Letra acertada");
        letras.splice(letras.indexOf(tecla), 1);
    } else if (valida.includes(tecla) && !letras_equivocadas.includes(tecla) && !palabra_array.includes(tecla)) {
        console.log(valida.includes(tecla));
        errores -= 1;
        letras_equivocadas.push(tecla);
        console.log("Errou");
    } else {
        console.log("Tecla no valida");
    }
    // volver el focus al input
    mostra_palabra();
    finaliza_juego();
    });



function iniciar() {
    // elegir una palabra aleatoria
    const elegido = listado[Math.floor(Math.random() * listado.length)];
    palabra = elegido.palabra;
    pista = elegido.pista;
    letras_equivocadas = [];
    // crear una array de letras
    letras = palabra.split("");
    letras = [...new Set(letras)];
    // posibilidade de errores
    errores = letras.length;
    // crear un array de cajas
    mostra_palabra();
  }

function mostra_palabra() {
    let html = "";
    const palabra_array = palabra.split("");
    console.log(letras)
    for (let index = 0; index < palabra_array.length; index++) {
        const element = palabra_array[index];
        let mostrar = "";
        if (letras.includes(element)) {
            mostrar = "_";
        } else {
            mostrar = element;
        }
        html += `<div class="w3-light-gray w3-margin w3-round w3-center w3-padding-small w3-text-teal">${mostrar}</div>`;
    }
    document.getElementById("palabra").innerHTML = html;
    document.getElementById("pista").innerHTML = pista;
    document.getElementById("restante").innerHTML = errores;
    document.getElementById("equivocada").innerHTML = letras_equivocadas.join(" ");
}

function finaliza_juego() {
    if (errores === 0 && letras.length > 0) {
        alert(`Perdiste, la palabra era ${palabra}`);
        iniciar();
    } else if (errores > 0 && letras.length === 0) {
        console.log("Ganaste");
        alert("Ganaste");
        iniciar();
    }
}

iniciar();
