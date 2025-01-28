const fr = document.getElementById("fraseInput");
const btn = document.querySelector("#transformar");

btn.onclick = () => {
  let frase = fr.value;
  let resultadoDiv = document.getElementById("resultado");

  let fraseCompleta = `Frase completa: ${frase}`;
  let numeroCaracteres = `Número de caracteres: ${frase.length}`;
  let fraseEnCursiva = `Frase en cursiva: <em>${frase}</em>`;
  let fraseEnNegrita = `Frase en negrita: <strong>${frase}</strong>`;
  let fraseEnRojo = `Frase en color rojo: <span style="color: red;">${frase}</span>`;
  let fraseTamano45px = `Frase en tamaño de 45px: <span style="font-size: 45px;">${frase}</span>`;
  let fraseTachada = `Frase tachada: <del>${frase}</del>`;

  resultadoDiv.innerHTML = `${fraseCompleta}<br>
  ${numeroCaracteres}<br>
  ${fraseEnCursiva}<br>
  ${fraseEnNegrita}<br>
  ${fraseEnRojo}<br>
  ${fraseTamano45px}<br>
  ${fraseTachada}`;
};
/*
btn.onclick = () => {
   let frase = fr.value;
  let resultadoDiv = document.getElementById("resultado");

  let fraseCompleta = document.createElement("p");
  fraseCompleta.innerText = `Frase completa: ${frase}`;

  let numeroCaracteres = document.createElement("p");
  numeroCaracteres.innerText = "Número de caracteres: " + frase.length;

  let fraseEnCursiva = document.createElement("p");
  fraseEnCursiva.innerHTML = "Frase en cursiva: <em>" + frase + "</em>";

  let fraseEnNegrita = document.createElement("p");
  fraseEnNegrita.innerHTML = "Frase en negrita: <strong>" + frase + "</strong>";

  let fraseEnRojo = document.createElement("p");
  fraseEnRojo.innerHTML = "Frase en color rojo: <span style='color: red;'>" + frase + "</span>";

  let fraseTamano45px = document.createElement("p");
  fraseTamano45px.innerHTML = "Frase en tamaño de 45px: <span style='font-size: 45px;'>" + frase + "</span>";

  let fraseTachada = document.createElement("p");
  fraseTachada.innerHTML = "Frase tachada: <del>" + frase + "</del>";

  resultadoDiv.innerHTML = "";
  resultadoDiv.appendChild(fraseCompleta);
  resultadoDiv.appendChild(numeroCaracteres);
  resultadoDiv.appendChild(fraseEnCursiva);
  resultadoDiv.appendChild(fraseEnNegrita);
  resultadoDiv.appendChild(fraseEnRojo);
  resultadoDiv.appendChild(fraseTamano45px);
  resultadoDiv.appendChild(fraseTachada);
}; */
