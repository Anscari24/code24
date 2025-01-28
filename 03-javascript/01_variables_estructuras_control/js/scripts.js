const mostra = document.querySelector("#mostra");

function salir() {
  location.replace("https://www.w3schools.com");
}

function salirono() {
  let salirono = confirm("Volver a cargar la app?");
  if (salirono) {
    location.reload();
  } else {
    salir();
  }
}
