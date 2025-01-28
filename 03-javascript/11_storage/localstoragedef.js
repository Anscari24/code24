function iniciar() {
  let boton = document.getElementById("grabar");
  boton.addEventListener("click", nuevoitem);
  addEventListener("storage", storagechange);
  mostrar();
}
function nuevoitem() {
  let clave = document.getElementById("clave").value;
  let valor = document.getElementById("texto").value;
  localStorage.setItem(clave, valor);
  document.getElementById("clave").value = "";
  document.getElementById("texto").value = "";
  mostrar();
}
function storagechange(e) {
  console.log(e.key);
  console.log(e.oldValue);
  console.log(e.newValue);
  console.log(e.url);
  console.log(e.storageArea);
  mostrar();
}
function mostrar() {
  let cajadatos = document.getElementById("cajadatos");
  cajadatos.innerHTML =
    '<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>';
  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML +=
      "<div>" +
      clave +
      " - " +
      valor +
      '<br><input type="button" onclick="eliminar(\'' +
      clave +
      '\')" value="Eliminar"></div>';
  }
}
function eliminar(clave) {
  if (confirm("¿Está Seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
}
function eliminarTodo() {
  if (confirm("Are you sure?")) {
    localStorage.clear();
    mostrar();
  }
}

addEventListener("load", iniciar);
