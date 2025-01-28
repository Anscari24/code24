const validaEnvia = () => {
  let nombre1 = document.firstContact.nombre.value;
  let apellidos1 = document.firstContact.apellidos.value;
  let dni1 = document.firstContact.dni.value;
  dni1 = dni1.toUpperCase();
  let direccion1 = document.firstContact.direccion.value;
  let localidad1 = document.firstContact.localidad.value;
  let provincia1 = document.firstContact.provincia.value;
  let cp1 = document.firstContact.cp.value;
  let telefono1 = document.firstContact.tel.value;
  let mail1 = document.firstContact.mail.value;
  let condiciones1 = document.firstContact.condiciones.checked;

  let numero;
  let letra;
  let let1;

  let pcp = /^\d{5}$/;
  let ptel = /^[6-7]{1}\d{8}$/;
  let pnombre = /^[A-ZÀ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,40}$/;
  let pdir = /^[A-ZÀ]{1}[a-zA-ZÀ-ÿ\/0-9,_-\u00f1\u00d1\s]{2,40}$/;
  let pmail =
    /^[a-z0-9_-]+(\.[a-z0-9-_]+)*@[a-z0-9-_]+(\.[a-z0-9-_]+)*(\.[a-z]{2,6})$/;
  let pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;

  if (!pnombre.test(nombre1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML = "Tiene que escribir su nombre";
    document.firstContact.nombre.style.border = "thick solid #FF0000";
    document.firstContact.nombre.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.nombre.style.border = "thick solid #0EB722";
    document.firstContact.apellidos.focus();
  }
  if (!pnombre.test(apellidos1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir sus apellidos";
    document.firstContact.apellidos.style.border = "thick solid #FF0000";
    document.firstContact.apellidos.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.apellidos.style.border = "thick solid #0EB722";
    document.firstContact.dni.focus();
  }
  if (pdni.test(dni1) === true) {
    numero = dni1.substr(0, dni1.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);

    let1 = dni1.substr(dni1.length - 1, 1);
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra != let1) {
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML =
        "Tiene que escribir una letra correcta a su  número de DNI/NIE";
      document.firstContact.dni.style.border = "thick solid #FF0000";
      document.firstContact.dni.focus();
      return false;
    } else {
      document.getElementById("error").style.display = "none";
      document.firstContact.dni.style.border = "thick solid #0EB722";
      document.firstContact.direccion.focus();
    }
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir su DNI/NIE correctamente";
    document.firstContact.dni.style.border = "thick solid #FF0000";
    document.firstContact.dni.focus();
    return false;
  }
  if (!pdir.test(direccion1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir una dirección correcta";
    document.firstContact.direccion.style.border = "thick solid #FF0000";
    document.firstContact.direccion.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.direccion.style.border = "thick solid #0EB722";
    document.firstContact.localidad.focus();
  }
  if (!pnombre.test(localidad1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir una localidad correcta";
    document.firstContact.localidad.style.border = "thick solid #FF0000";
    document.firstContact.localidad.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.localidad.style.border = "thick solid #0EB722";
    document.firstContact.provincia.focus();
  }
  if (provincia1 == 0) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que indicar su provincia";
    document.firstContact.provincia.style.border = "thick solid #FF0000";
    document.firstContact.provincia.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.provincia.style.border = "thick solid #0EB722";
    document.firstContact.cp.focus();
  }
  if (!pcp.test(cp1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir un código postal válido";
    document.firstContact.cp.style.border = "thick solid #FF0000";
    document.firstContact.cp.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.cp.style.border = "thick solid #0EB722";
    document.firstContact.tel.focus();
  }
  if (!ptel.test(telefono1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir un número de teléfono móvil correcto";
    document.firstContact.tel.style.border = "thick solid #FF0000";
    document.firstContact.tel.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.tel.style.border = "thick solid #0EB722";
    document.firstContact.mail.focus();
  }
  if (!pmail.test(mail1)) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que escribir una dirección de correo correcta";
    document.firstContact.mail.style.border = "thick solid #FF0000";
    document.firstContact.mail.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
    document.firstContact.mail.style.border = "thick solid #0EB722";
    document.firstContact.condiciones.focus();
  }
  if (condiciones1 == 0) {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Tiene que aceptar nuestras condiciones";
    document.firstContact.condiciones.focus();
    return false;
  } else {
    document.getElementById("error").style.display = "none";
  }

  document.firstContact.submit();
};
