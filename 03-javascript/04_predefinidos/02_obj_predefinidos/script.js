/* function cambiarColor() {
  var select = document.getElementById("colorSelect");
  var color = select.value;
  document.body.style.backgroundColor = color;
} */

window.onload =()=>{
 const select = document.createElement("select");
  select.id = "colorSelect";
 const opciones = [
    { valor: "red", color: "Rojo" },
    { valor: "green", color: "Verde" },
    { valor: "blue", color: "Azul" },
    { valor: "yellow", color: "Amarillo" }
  ];
  for (let i = 0; i < opciones.length; i++) {
    let option = document.createElement("option");
    option.value = opciones[i].valor;
    option.text = opciones[i].color;
    select.appendChild(option);
      }
select.onchange= ()=> {
 const select = document.getElementById("colorSelect");
  let color = select.value;
            document.body.style.backgroundColor = color;  
      }
       document.body.appendChild(select); 
/*   select.addEventListener("change", cambiarColor);
  document.body.appendChild(select); */
};

// v2.0
/* function cambiarColor() {
  let select = document.getElementById("colorSelect");
   color = select.value;
  document.body.style.backgroundColor = color;
} */
/*
window.onload =()=> {
 let opciones = [
    { valor: "red", color: "Rojo" },
    { valor: "green", color: "Verde" },
    { valor: "blue", color: "Azul" },
    { valor: "yellow", color: "Amarillo" }
  ];

  let selectHTML = `<select id="colorSelect" onchange="cambiarColor()">`;
  opciones.forEach(opcion=> {
    selectHTML += `<option value="${opcion.valor}">${opcion.color}</option>`;
  });
  selectHTML += `</select>`;

  document.body.innerHTML += selectHTML;
}; */