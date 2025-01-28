const mostra = document.getElementById("mostra");
const ctabla = function tabla() {
	let table = `<table>
 <tr>
     <td contenteditable>texto1.1</td>
     <td  contenteditable>texto1.2</td>
 </tr>
 <tr>
     <td  contenteditable>texto2.1</td>
     <td  contenteditable>texto2.2</td>
 </tr>
 </table>`;
	mostra.innerHTML = table;
};

const borrar = function eliminar() {
	mostra.innerHTML = "";
};
const construye = document.getElementById("construir");
construye.onclick = ctabla;

const elimino = document.getElementById("eliminar");
elimino.onclick = borrar;
