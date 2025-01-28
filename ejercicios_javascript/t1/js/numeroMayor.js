let num2,
  contador = 0;

let error = "";

do {
  num2 = Number(
    prompt(`${error} Introduce un número`).trim().replace(",", ".")
  );
  error = "ERRORUM. ";

  /*   if (isNaN(num2) || num2 == "") {
    contador = contador;
  } else {
    contador++;
  } */
  /*     if (isNaN(num2) || num2 == "") contador = contador;
    else contador++; */
  isNaN(num2) || num2 == "" ? (contador = contador) : contador++;
} while (!Number(num2 > 50));

let result = `Número aceptado es ${num2}. Has introducido un número menor o igual a 50: ${
  contador - 1
} veces.`;
mostra.innerHTML = result;
