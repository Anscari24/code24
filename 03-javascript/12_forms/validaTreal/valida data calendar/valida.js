function avisoReset(){
var reset=confirm("¡ATENCIÓN!\nSi confirma se borrarán todos los datos");
if(reset){
location.reload(true);
return true;	
}else {
return false;
}
};


function valida_envia(){
	var acepto		=v_checked();
	var usuario		=user();
	var telefono	=tel();
	var edad 		=edad();
	var correu		=mail();
	var dni 		=c_dni();


	if(!acepto||!usuario||!telefono||!edad||!correu||!dni){
		alert("¡ERROR!");
		return false;
	}else{
		return true;
	};
};


function v_checked() {
var acepto=document.contacto.acepto.checked;
if(!acepto){
	alert("Ha de aceptar las condiciones para enviar el formulario");
		return false;
		}else{
		return true;
		}
};


function user(){
var usuario=document.contacto.usuario.value;
var pnombre=/^[A-ZÀÁÈÉÍÒÓÚ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,20}$/;
pnombre.test(usuario);
if(!pnombre.test(usuario)||usuario>3||usuario>20){
	return false;
	}else{
		return true;
	}
};

function tel(){
	var tel=document.contacto.telefono.value;
	var ptel=/^[9]{1}\d{8}$/;
	var resul=ptel.test(tel);
	if(!resul){
	return false;
	}else{
		return true;
	}
};


function edad() {
	var fechaNacimiento = document.getElementById('miedad').value;
	var fechaNace = new Date(fechaNacimiento);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    var edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
    console.log(edad);
    if(edad>=18){
    return true;
    }
    else{
    	return false;
    }

};

// function dia(){
// 	var dia=document.contacto.fecha_dia.value;
// 	var pdia=/^[0-9]{1,2}$/;
// 	var resul=pdia.test(dia);
// 	if(!resul||dia<1||dia>31){
// 	return false;
// 	}else{
// 		return true;
// 	}


function mail(){
	var correu=document.contacto.correu.value;
	var pmail=/^[a-z0-9_-]+(\.[a-z0-9-_]+)*@[a-z0-9-_]+(\.[a-z0-9-_]+)*(\.[a-z]{2,})$/;
	var resul=pmail.test(correu);
	if(!resul){
	return false;
	}else{
		return true;
	}

};


function c_dni(){
	var dni=document.contacto.dni.value;
	dni=dni.toUpperCase();
	var numero,letra,let1;
	var pdni=/^[XYZ]?\d{5,8}[A-Z]{1}$/;
	var resul=pdni.test(dni);

	if(resul){
		numero=dni.substr(0,dni.length-1);
		numero=numero.replace('X',0);
		numero=numero.replace('Y',1);
		numero=numero.replace('Z',2);

		let1=dni.substr(dni.length-1,1);
		letra="TRWAGMYFPDXBNJZSQVHLCKE";
		numero=numero%23;
		letra=letra.substring(numero,numero+1);
		if(letra!==let1){
			return false;
		}else{
			return true;
		}

	}else{
		return false;
	}

};

function pasaValor(name){
var valor=document.contacto[name].value;
var funcion;

switch(name){
	case 'acepto':
	funcion=v_checked();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". Correcto";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". Incorrecto. No válido";
	info.style.color="#FF0000";		
	}
break;

case 'usuario':
	funcion=user();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". Correcto";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". Incorrecto. El nombre de usuario debe tener entre 3 y 20 carácteres y empezar con mayúsculas";
	info.style.color="#FF0000";		
	}
break;


case 'telefono':
	funcion=tel();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". Teléfono correcto";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". Incorrecto. El teléfono tiene que comenzar por 9 y tener 9 dígitos";
	info.style.color="#FF0000";		
	}
break;


case 'miedad':
	funcion=edad();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". Tienes más de 18 años";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". No puedes registrarte porque tienes menos de 18 años";
	info.style.color="#FF0000";		
	}
break;


// case 'fecha_dia':
// 	funcion=dia();
// 	if (funcion){
// 	document.getElementById("info").innerHTML=valor+". Día correcto";
// 	info.style.color="#068B3E";	
// 	}else{
// 	document.getElementById("info").innerHTML=valor+". Incorrecto. El día del mes solo puede ser entre 1 y 31";
// 	info.style.color="#FF0000";		
// 	}
// break;


case 'correu':
	funcion=mail();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". Mail correcto";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". Incorrecto. El correo electrónico debe contener (@), texto y (.) seguido de una extensión";
	info.style.color="#FF0000";		
	}
break;


case 'dni':
	funcion=c_dni();
	if (funcion){
	document.getElementById("info").innerHTML=valor+". DNI correcto";
	info.style.color="#068B3E";	
	}else{
	document.getElementById("info").innerHTML=valor+". Incorrecto. Escribe un DNI o NIE correcto";
	info.style.color="#FF0000";		
	}
break;
}
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};


function guardarDatos(){
var usuario=document.contacto.usuario.value;
var tel=document.contacto.telefono.value;
var edad=document.contacto.miedad.value;
// var dia=document.contacto.fecha_dia.value;
var email=document.contacto.correu.value;
var dni=document.contacto.dni.value;

setCookie("Usuario", usuario, 1);
setCookie("Teléfono", tel, 1);
setCookie("Edad", edad, 1);
// setCookie("Día", dia, 1);
setCookie("Correo", email, 1);
setCookie("Dni", dni, 1);
};


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};


function obtenerDatos(){
var mUsuario=getCookie("Usuario");
var mTel=getCookie("Teléfono");
var mEdad=getCookie("Edad");
// var mDia=getCookie("Día");
var mMail=getCookie("Correo");
var mDni=getCookie("Dni");


document.contacto.usuario.value=mUsuario;
document.contacto.telefono.value=mTel;
document.contacto.miedad.value=mEdad;
// document.contacto.fecha_dia.value=mDia;
document.contacto.correu.value=mMail;
document.contacto.dni.value=mDni;
};