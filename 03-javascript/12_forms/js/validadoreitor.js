function validar() {
  let mymail = mail();
  let myasunto = asunt();
  let mycontent = content();
  let mydni = c_dni();
  let myedad = edad();
  let acepto = v_check();

  if (!mymail || !myasunto || !mycontent || !mydni || !myedad || !acepto) {
    document.querySelector("#error").innerHTML = "ERRORUM";
    error.style.color = "#FF0000";
    return false;
  }
  document.querySelector("#error").innerHTML = "Enviando";
  error.style.color = "#068B3E";
  return true;
}

function aviso_reset() {
  let reset = confirm(
    "ATENCIÓN!!!!!!!\nSi confirmas, se borraran todos los datos del formulario"
  );
  reset ? location.reload(true) : false;
}

function mail() {
  let ptremail =
    /^[a-z0-9_-]+([.][a-z0-9_-]+)*@[a-z0-9_]+([.][a-z0-9_]+)*[.][a-z]{2,9}$/;
  let correo = document.firstContact.email.value;
  if (!ptremail.test(correo)) {
    return false;
  }
  return true;
}

function asunt() {
  let ptrasunto = /^[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{5,40}$/;
  let asunto = document.firstContact.asunto.value;
  if (!asunto.match(ptrasunto)) {
    return false;
  }
  return true;
}

function c_dni() {
  let dni = document.firstContact.dni.value;
  dni = dni.toUpperCase();
  let numero, letra, let1;
  let pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
  let resul = pdni.test(dni);

  if (resul) {
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);

    let1 = dni.substr(dni.length - 1, 1);
    letra = "TRWAGMYFPDXBNJZSQVHLCKE";
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== let1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function edad() {
  let fechaNacimiento = document.firstContact.miedad.value;
  let fechaNace = new Date(fechaNacimiento);
  let fechaActual = new Date();
  console.log(fechaNacimiento);
  console.log(fechaNace);
  console.log(fechaActual);

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18) {
    return true;
  } else {
    return false;
  }
}

function content() {
  let ptrcontent = /[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{10,250}$/;
  let content = document.firstContact.contenido.value;
  if (!content.match(ptrcontent)) {
    return false;
  }
  return true;
}
function v_check() {
  let acepto = document.firstContact.acepto.checked;
  if (!acepto) {
    return false;
  }
  return true;
}

function pasa_valor(name) {
  /*   let valor = document.firstContact[name].value; */
  let result;

  switch (name) {
    case "email":
      result = mail();
      if (result) {
        document.getElementById("mostra1").innerHTML = ". Email correcto";
        mostra1.style.color = "#068B3E";
        email.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra1").innerHTML =
          ". Email no válido. se esperaba una (@) y un (.)";
        mostra1.style.color = "#FF0000";
        email.style.border = "solid 1px red";
      }
      break;

    case "asunto":
      result = asunt();
      if (result) {
        document.getElementById("mostra2").innerHTML =
          ". Asunto dentro de parámetros";
        mostra2.style.color = "#068B3E";
        asunto.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra2").innerHTML =
          ". Asunto no válido. SE SIENTEEEEE";
        mostra2.style.color = "#FF0000";
        asunto.style.border = "solid 1px red";
      }
      break;

    case "contenido":
      result = content();
      if (result) {
        document.getElementById("mostra3").innerHTML = ". Contenido válido";
        mostra3.style.color = "#068B3E";
        contenido.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra3").innerHTML =
          ". Asunto no válido. SE SIENTEEEEE";
        mostra3.style.color = "#FF0000";
        contenido.style.border = "solid 1px red";
      }
      break;

    case "miedad":
      result = edad();
      if (result) {
        document.getElementById("mostra4").innerHTML = "Tienes más de 18 años";
        mostra4.style.color = "#068B3E";
        miedad.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra4").innerHTML =
          "No puedes registrarte porque tienes menos de 18 años";
        mostra4.style.color = "#FF0000";
        miedad.style.border = "solid 1px red";
      }
      break;

    case "dni":
      result = c_dni();
      if (result) {
        document.getElementById("mostra5").innerHTML = "DNI válido";
        mostra5.style.color = "#068B3E";
        dni.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra5").innerHTML = "DNI o NIE no válido";
        mostra5.style.color = "#FF0000";
        dni.style.border = "solid 1px red";
      }
      break;
    case "acepto":
      result = v_check();
      if (result) {
        document.getElementById("mostra6").innerHTML = " Correcto";
        mostra6.style.color = "#068B3E";
        acepto.style.border = "solid 1px green";
      } else {
        document.getElementById("mostra6").innerHTML = "Incorrecto. No válido";
        mostra6.style.color = "#FF0000";
        acepto.style.border = "solid 1px red";
      }
      break;
  }
}
