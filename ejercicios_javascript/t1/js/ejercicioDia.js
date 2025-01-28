let dia = prompt("Introduce un día de la semana en minúsculas. Ej: lunes");
dia = dia.toUpperCase();
console.log(dia);
let result;
let ndia = 0;
switch (dia) {
  case "LUNES":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 1
    } de la semana`;
    break;
  case "MARTES":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 2
    } de la semana`;
    break;
  case "MIERCOLES":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 3
    } de la semana`;
    break;
  case "JUEVES":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 4
    } de la semana`;
    break;
  case "VIERNES":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 5
    } de la semana`;
    break;
  case "SABADO":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 6
    } de la semana`;
    break;
  case "DOMINGO":
    result = `Has introducido ${dia} y es el día número ${
      ndia + 7
    } de la semana`;
    break;
  default:
    result = "Introduce un día de la semana correcto";
    break;
}

mostra.innerHTML = result;
