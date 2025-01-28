/* 
Ejercicio 1
Crea un html que per mitjà d'una funció et demani un número per camp de text i et digui si és nombre parell o imparell
*/
const btn_ejer1 = document.querySelector("#btn_ejer1");
const input_numero = document.querySelector("#input_numero");
const mostra1 = document.querySelector("#mostra1");
btn_ejer1.addEventListener("click", () => {
      let text = Number(input_numero.value);
      let salida_html = "";
      if (isNaN(text) != true && text > 0)  //isNaN(num1)
      {
            let resposta = "";
            if (text % 2 == 0) {
                  resposta = "par";
            } else {
                  resposta = "impar";
            }
            salida_html = `<div class="alert alert-info text-center" role="alert">
                              El número introducido es: <span class="fw-bold"> ${text} </span> y es: <span class="fw-bold"> ${resposta} </span>
                              </div>`;
            input_numero.value = "";
      }
      else {
            salida_html = `<div class="alert alert-danger text-center" role="alert">
                              Debes de escribir un número válido
                        </div>`;
            input_numero.focus();
      }
      mostra1.innerHTML = salida_html;
});
/* 
Ejercicio 2
 Escriu un html que et demani per funció i des d'un camp de text, el resultat de dividir 144/12, Aquest resultat es calcula en ottra funció i recollit en aquesta primera paradejar passar a l'usuari o no segons la seva resposta. 
*/
const btn_ejer2 = document.querySelector("#btn_ejer2");
const input_ejer2 = document.querySelector("#input_ejer2");
const mostra2 = document.querySelector("#mostra2");

// Función para comprobar el resultado de dividir 144/12
const compruebaResult = (numero) => {
      if (numero == 144 / 12)
            return true;
      else
            return false;
};

btn_ejer2.addEventListener("click", () => {
      let text = Number(input_ejer2.value);
      let salida_html = "";
      if (isNaN(text) != true && text > 0) {
            let resposta = "";
            let clase_resposta = "info";
            // Comprobar el resultado de la división con lo introducido por el usuario
            if (compruebaResult(text))
                  resposta = "correcta";
            else {
                  resposta = "incorrecta";
                  clase_resposta = "danger";
                  input_ejer2.focus();
            }

            salida_html = `<div class="alert alert-${clase_resposta} text-center" role="alert">
                              El número introducido es: <span class="fw-bold"> ${text} </span> y la respuesta es: <span class="fw-bold"> ${resposta} </span>
                              </div>`;

            input_ejer2.value = "";
      }
      else {
            salida_html = `<div class="alert alert-danger text-center" role="alert">
                              Debes de escribir un número válido
                        </div>`;
            input_ejer2.focus();
      }
      mostra2.innerHTML = salida_html;
});
/* 
Ejercicio 3
 Escriu un html que demani preu sense iva, després el iva i et retorni el valor del producte amb iva, tot això amb camps de text i una funció.
*/
const btn_ejer3 = document.querySelector("#btn_ejer3");
const input_precio = document.querySelector("#input_precio");
const input_iva = document.querySelector("#input_iva");
const mostra3 = document.querySelector("#mostra3");
const validacion_ejer3 = document.querySelector("#validacion_ejer3");

btn_ejer3.addEventListener("click", () => {
      validacion_ejer3.classList.add("was-validated");
      mostra3.innerHTML = "";

      if (input_precio.checkValidity() && input_iva.checkValidity()) {
            let iva = Number(input_iva.value).toFixed(2) / 100 + 1;
            let precio_final = (input_precio.value * iva).toFixed(2);
            let salida_html = `<div class="alert alert-info text-center" role="alert">
            El precio introducido es: <span class="fw-bold"> ${input_precio.value} </span> y el iva aplicado es: <span class="fw-bold"> ${input_iva.value} </span> <br> El precio final del producto es: <span class="fw-bold"> ${precio_final}  </span>
            </div>`;
            mostra3.innerHTML = salida_html;

            validacion_ejer3.classList.remove("was-validated");
            input_precio.value = "";
            input_iva.value = "";
      }
});

/* 
Ejercicio 4
 Escriu un programa que demani un primer número, ens permeti triar d'un select: suma, resta, multiplica, divideix, o mòdul, després ens demani un segon número i ens doni el resultat de l'operació seleccionada. Tot això amb camps de text i select.
*/
const btn_ejer4 = document.querySelector("#btn_ejer4");
const input_numero1 = document.querySelector("#input_numero1");
const input_numero2 = document.querySelector("#input_numero2");
const operacionarealizar = document.querySelector("#operacionarealizar");
const mostra4 = document.querySelector("#mostra4");
const validacion_ejer4 = document.querySelector("#validacion_ejer4");

btn_ejer4.addEventListener("click", () => {
      validacion_ejer4.classList.add("was-validated");
      mostra4.innerHTML = "";

      if (input_numero1.checkValidity() && input_numero2.checkValidity() && operacionarealizar.checkValidity()) {
            console.log("todo bien");
            let numero1 = Number(input_numero1.value);
            let numero2 = Number(input_numero2.value);
            let operacion = operacionarealizar.value;
            let resultado = 1;

            switch (operacion) {
                  case "sumar":
                        resultado = numero1 + numero2;
                        break;
                  case "restar":
                        resultado = numero1 - numero2;
                        break;
                  case "multiplicar":
                        resultado = numero1 * numero2;
                        break;
                  case "dividir":
                        resultado = numero1 / numero2;
                        break;
                  case "modulo":
                        resultado = numero1 % numero2;
                        break;
                  default:
                        resultado = 0;
            }

            let salida_html = `<div class="alert alert-info text-center" role="alert">
            El primer número introducido es: <span class="fw-bold"> ${numero1} </span> , el segundo número introducido es: <span class="fw-bold"> ${numero2} </span> y la operación que quieres realizar es: <span class="fw-bold"> ${operacion} </span>  <br> El resultado es: <span class="fw-bold"> ${resultado}  </span>
            </div>`;
            mostra4.innerHTML = salida_html;

            validacion_ejer4.classList.remove("was-validated");
            input_numero1.value = "";
            input_numero2.value = "";
            operacionarealizar.selectedIndex = 0;

      }
});

/* 
Ejercicio 5
 Crea un html que ens permeti recollir un array amb els mesos de l'any ja fet i el mostrem:
    a- En la seva ordre real
    b- En ordre alfabètic
    c- Separat amb guions
    d- Ordre invers
    e- Separat amb un altre caràcter que el teu decideixis.
*/
const btn_ejer5 = document.querySelector("#btn_ejer5");
const mostra5 = document.querySelector("#mostra5");

const arrayaTextoconSimbolo = (arrayatexto, simbolo) => {
      let myarrayaux = structuredClone(arrayatexto).join(` ${simbolo} `);
      return myarrayaux;
};

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
btn_ejer5.addEventListener("click", () => {
      let arrayordenado = structuredClone(meses).sort();
      let arrayreverse = structuredClone(meses).reverse();

      let salida_html = `<h4> En la seva ordre real </h4>
                        <p> ${meses} </p>
                        <h4> En ordre alfabètic </h4>
                        <p> ${arrayordenado} </p>
                        <h4> Separat amb guions </h4>
                        <p> ${arrayaTextoconSimbolo(meses, "-")} </p>
                        <h4> Ordre invers </h4>
                        <p> ${arrayreverse} </p>
                        <h4> Separat amb un altre caràcter que el teu decideixis </h4>
                        <p> ${arrayaTextoconSimbolo(meses, ";@")} </p>`;

      mostra5.innerHTML = salida_html;

});

/* 
Ejercicio 6
 Crea un nou documento  HTML que ens imprimeixi en la pàgina un llistat dels codis d'un producte inventat… “codigo_producte 0 , codigo_producte 1…… 
*/
const btn_ejer6 = document.querySelector("#btn_ejer6");
const input_numero_etiquetas = document.querySelector("#input_numero_etiquetas");
const mostra6 = document.querySelector("#mostra6");
const validacion_ejer6 = document.querySelector("#validacion_ejer6");

// Función que devuelve un numero aleatorio entre dos valores
const numeroAleatorio = (min = 1, max = 10) => {
      return Math.round(Math.random() * (max - min) + min);
};
// Función para crear una etiqueta nueva
const crearEtiquetaNueva = () => {
      let nueva_etiqueta = numeroAleatorio(1000, 9999);
      return nueva_etiqueta;
}

btn_ejer6.addEventListener("click", () => {
      validacion_ejer6.classList.add("was-validated");
      mostra6.innerHTML = "";

      if (input_numero_etiquetas.checkValidity()) {
            console.log("todo bien");
            let numero_de_etiquetas = Number(input_numero_etiquetas.value);

            let salida_html = `<div class="alert alert-info text-center" role="alert">
                                    <ul class="list-inline">`;
            for (let x = 0; x < numero_de_etiquetas; x++) {
                  salida_html += `<li class="list-inline-item"> Número de Etiqueta: ${crearEtiquetaNueva()} --> ${x + 1} </li>`;
            }
            salida_html += `</ul> </div>`;

            mostra6.innerHTML = salida_html;
            validacion_ejer6.classList.remove("was-validated");
            input_numero_etiquetas.value = "";
      }
});
/* 
Ejercicio 7 y 8
 7.Escriu un html que ens permeti mitjançant una funció mostrar les dades d'un array associatiu d'una persona amb les següents dades:
 a- Nom
 b- Cognom
 c- Edat
 d- DNI

8. Escriu un html que per mitjà d'una funció, ens permeti introduir en inputs de text, Nom, Cognoms, edat i DNI, i ho emmagatzemi en un array amb aquests índexs de posició.
*/

/* Array de personsas para pruebas */
const personas = [
      {
            "nombre": "Paco",
            "apellidos": "Apellido 1",
            "edad": "11",
            "dni": "12345678A"
      },
      {
            "nombre": "Nombre 2",
            "apellidos": "Apellido 2",
            "edad": "22",
            "dni": "12345678B"
      },
      {
            "nombre": "Nombre 3",
            "apellidos": "Apellido 3",
            "edad": "33",
            "dni": "12345678C"
      },
      {
            "nombre": "Nombre 4",
            "apellidos": "Apellido 4",
            "edad": "44",
            "dni": "12345678D"
      },
      {
            "nombre": "Nombre 5",
            "apellidos": "Apellido 5",
            "edad": "55",
            "dni": "12345678E"
      }

];

// Gestión de la entradas del formulario agregar personas
const form_nueva_persona = document.querySelector("#form_persona");
//const personas = [];
let mostrar_boton_listado = false;

form_nueva_persona.addEventListener("submit", (e) => {

      form_nueva_persona.classList.add('was-validated');
      e.preventDefault()
      e.stopPropagation()
      if (form_nueva_persnona.checkValidity()) {
            let nueva_persona = {
                  "nombre": form_nueva_persona.nombre.value,
                  "apellidos": form_nueva_persona.apellidos.value,
                  "edad": form_nueva_persona.edad.value,
                  "dni": form_nueva_persona.dni.value
            }
            personas.push(nueva_persona);
            form_nueva_persona.classList.remove('was-validated');
            form_nueva_persona.reset();

            //console.log(personas);

            // Mostrar botón de listar personas
            if (mostrar_boton_listado == false) {
                  mostrar_boton_listado = true;
                  document.querySelector("#btn_mostrar_listado_persona").classList.add("mostrar_elemento");
            }

            // Abrir modal
            let myModal = new bootstrap.Modal(document.getElementById('modal_persona'));
            let texto_modal = `Persona añadida correctamente!`;
            document.querySelector(".modal-body").innerHTML = texto_modal;
            myModal.show();
      }
}, false);

// Gestión del Listado de Personas
const listado_personas_content = document.querySelector("#listado_personas_content");
const btn_mostrar_listado_persona = document.querySelector("#btn_mostrar_listado_persona");
btn_mostrar_listado_persona.addEventListener("click", () => {
      let salida_html = "";
      personas.forEach((Element, index) => {
            salida_html += `<div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="card mb-2">
                                          <div class="card-header">
                                                Persona Nº: ${index + 1}
                                          </div>
                                          <div class="card-body">
                                                <h5 class="card-title">
                                                      Nombre: ${Element.nombre}  <br>
                                                      Apellidos: ${Element.apellidos}
                                                </h5>
                                                <p class="card-text">
                                                      <span class="fw-bold"> Edad: </span> ${Element.edad} <br>
                                                      <span class="fw-bold"> Dni: </span> ${Element.dni} <br>
                                                </p>
                                          
                                          </div>
                              </div></div>`;
      });

      listado_personas_content.innerHTML = salida_html;
});


/* 
Ejercicio 9
 Escriu un html que ens permeti introduir 5 primers, 5 segons, i 5 postres del  menú setmanal d'un restaurant, aquest s’haurà de mostrar a una taula indican Primer, Segón, i postre de cada dia, de dilluns a divendres
*/

const dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let menu_semanal = [];

// Gestión de la entradas del formulario agregar personas
const form_menu = document.querySelector("#form_menu");
const content_form_menu = document.querySelector("#content_form_menu");
const content_table_menu = document.querySelector("#content_table_menu");
let cuenta_dias = 0;

form_menu.addEventListener("submit", (e) => {

      form_menu.classList.add('was-validated');
      e.preventDefault()
      e.stopPropagation()
      if (form_menu.checkValidity()) {
            cuenta_dias++;
            if (cuenta_dias <= dias_semana.length) {
                  let menu_dia = {
                        "primero": form_menu.primero.value,
                        "segundo": form_menu.segundo.value,
                        "postre": form_menu.postre.value
                  }
                  menu_semanal.push(menu_dia);
                  form_menu.classList.remove('was-validated');
                  form_menu.reset();

                  // Abrir modal
                  let myModal = new bootstrap.Modal(document.getElementById('modal_persona'));
                  let texto_modal = `Menú añadido correctamente para el día: ${dias_semana[cuenta_dias - 1]}`;
                  document.querySelector(".modal-body").innerHTML = texto_modal;
                  myModal.show();

                  // Si ya se ha introducido el menu. Ocultar formulario y generar la tabla
                  if (cuenta_dias == dias_semana.length) {
                        content_form_menu.classList.add("hide_content");
                        let salida_html = `<table class="table table-striped table-hover">
                                                <thead>
                                                      <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col">Primero</th>
                                                            <th scope="col">Segundo</th>
                                                            <th scope="col">Postre</th>
                                                      </tr>
                                                </thead>
                                                <tbody>`;

                        menu_semanal.forEach((element, index) => {
                              salida_html += `<tr>
                                                <th scope="row">${dias_semana[index]}</th>
                                                <td>${element.primero}</td>
                                                <td>${element.segundo}</td>
                                                <td>${element.postre}</td>
                                          </tr>`;
                        });
                        salida_html += `</tbody>
                                          </table>`;

                        content_table_menu.innerHTML = salida_html;
                  }
            }
      }
}, false);
