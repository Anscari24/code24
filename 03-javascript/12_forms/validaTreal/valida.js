function avisoReset(){
	var reset=confirm("ATENCIÓN!!!!!!!\nSi confirmas, se borraran todos los datos del formulario");
	if(reset){
		location.reload(true);
		return true;
	}else{
		return false;
	}
};
function valida_envia(){

	var acepto     =v_checked();
	var usuario    =user();
	var telefono   =tel();
	var fecha_dia  =dia();
	var fecha_mes  =mes();
	var fecha_anyo =anyo();
	var correu     =mail();
	var dni        =c_dni();

	if(!acepto || !usuario || !telefono || !fecha_dia || !fecha_mes || !fecha_anyo || !correu || !dni){
		return false;
	}else{
		return true;
	}
};

function v_checked(){
	var acepto=document.contacto.acepto.checked;
	if(!acepto){
		window.alert("Ha de aceptar las condiciones para enviar el formulario");
		return false;
	}
	return true;
};

function user(){
	var pnombre=/^[A-ZÀ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,20}$/;
	var usuario=document.contacto.usuario.value;
	if(!pnombre.test(usuario)){	
	return false;
	}
return true;
};

function tel(){
	var ptel=/^[9]{1}\d{8}$/;
	var tel=document.contacto.telefono.value;
	if(!ptel.test(tel)){	
	return false;
	}
return true;
};

function dia(){
	var pdia=/^\d{1,2}$/;
	var dia= document.contacto.fecha_dia.value;
	if(!pdia.test(dia)||dia<1||dia>31){
		return false;
	}
	return true;
};
function mes(){
	var pmes=/^\d{1,2}$/;
	var mes= document.contacto.fecha_mes.value;
	if(!pmes.test(mes)||mes<1||mes>12){
		return false;
	}
	return true;
};
function anyo(){
	var panyo=/^\d{4}$/;
	var anyo= document.contacto.fecha_anyo.value;
	if(!panyo.test(anyo)||anyo<=1900||anyo>1996){
		return false;
	}
	return true;
};

//data introduida com...01/01/1999
//Validar el formato de la fecha:

		// function validarFormatoFecha(campo) {
		//       var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
		//       if ((campo.match(RegExPattern)) && (campo!='')) {
		//             return true;
		//       } else {
		//             return false;
		//       }
		// }

	//Validar si la fecha introducida es real:

		// function existeFecha(campo){
		//       var fechaf = campo.split("/");
		//       var day = fechaf[0];
		//       var month = fechaf[1];
		//       var year = fechaf[2];
		//       var date = new Date(year,month,'0');
		//       if((day-0)>(date.getDate()-0)){
		//             return false;
		//       }
		//       return true;
		// }
 
		// function existeFecha2 (campo) {
		//         var fechaf = campo.split("/");
		//         var d = fechaf[0];
		//         var m = fechaf[1];
		//         var y = fechaf[2];
		//         return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
		// }

		//Validar si la fecha introducida es anterior o menor a la actual:

		// function validarFechaMenorActual(campo){
		//       var x=new Date();
		//       var fecha = campo.split("/");
		//       x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
		//       var today = new Date();
		 
		//       if (x >= today)
		//         return false;
		//       else
		//         return true;
		// }

	// 		var fecha = "13/09/1985";
	// if(validarFormatoFecha(fecha)){
	//       if(existeFecha(fecha)){
	//             alert("La fecha introducida es correcta.");
	//       }else{
	//             alert("La fecha introducida no existe.");
	//       }
	// }else{
	//       alert("El formato de la fecha es incorrecto.");
	// }


function mail(){
	var pmail=/^[a-z0-9_-]+(\.[a-z0-9-_]+)*@[a-z0-9-_]+(\.[a-z0-9-_]+)*(\.[a-z]{2,6})$/;
	var correu= document.contacto.correu.value;
	if(!pmail.test(correu)){
		return false;
	}
	return true;
};
function c_dni(){
	var dni =document.contacto.dni.value;
	var numero,let1,letra;
	var pdni=/^[XYZ]?\d{5,8}[A-Z]{1}$/;
	dni= dni.toUpperCase();

if(pdni.test(dni)===true){
		numero=dni.substr(0,dni.length-1);
	numero=numero.replace('X',0);
	numero=numero.replace('Y',1);
	numero=numero.replace('Z',2);

	let1=dni.substr(dni.length-1,1);
	letra="TRWAGMYFPDXBNJZSQVHLCKET";
	numero=numero%23;
	letra=letra.substring(numero,numero+1);
	if(letra!=let1){
	return false;
	}
	return true;
}
else{
	return false;
}
};

function pasaValor(name){
	var formulario=document.forms['contacto'];
	var valor = formulario[name].value;
	/*var valor =document.contacto.name.value;*/
	var rfuncion;

	switch(name){
		case 'acepto':
		rfuncion= v_checked();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML="Ha de aceptar las condiciones <br/> y términos para enviar el formulario";
			info.style.color="#FF0000";
		}
		break;

		case 'usuario':
		rfuncion= user();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". El nombre de usuario debería tener entre 2 y 20 carácteres ";
			info.style.color="#FF0000";
		}
		break;

		case 'telefono':
		rfuncion= tel();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". El teléfono ha de comenzar por 9 y tener 9 dígitos en total";
			info.style.color="#FF0000";
		}
		break;

		case 'fecha_dia':
		rfuncion= dia();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Solamente se aceptan entre el día 1 y 31 del mes";
			info.style.color="#FF0000";
		}
		break;

		case 'fecha_mes':
		rfuncion= mes();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Solamente se aceptan valores entre 1 y 12";
			info.style.color="#FF0000";
		}
		break;

		case 'fecha_anyo':
		rfuncion= anyo();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Ha de ser un año entre 1901 y 1996 incluidos";
			info.style.color="#FF0000";
		}
		break;

		case 'correu':
		rfuncion= mail();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Introduzca un correo electrónico correcto  incluyendo (@) y (.)";
			info.style.color="#FF0000";
		}
		break;

		case 'dni':
		rfuncion= c_dni();
		if(rfuncion){
			document.getElementById('info').innerHTML=valor+". Validado";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Escriba un DNI / NIE correcto";
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
	var usuario = document.contacto.usuario.value;
	var tel = document.contacto.telefono.value;
	var dia = document.contacto.fecha_dia.value;
	var mes = document.contacto.fecha_mes.value;
	var anyo = document.contacto.fecha_anyo.value;
	var email = document.contacto.correu.value;
	var dni = document.contacto.dni.value;

	setCookie("Usuario",usuario,1);
	setCookie("Teléfono",tel,1);
	setCookie("Día",dia,1);
	setCookie("Mes",mes,1);
	setCookie("Año",anyo,1);
	setCookie("Correo",email,1);
	setCookie("Dni",dni,1);

/*setCookie(nombre,valor,dias);*/	
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
	var muestraUser=getCookie('Usuario');
	var muestraTel=getCookie('Teléfono');
	var muestraDia=getCookie('Día');
	var muestraMes=getCookie('Mes');
	var muestraAnyo=getCookie('Año');
	var muestraMail=getCookie('Correo');
	var muestraDni=getCookie('Dni');

	document.contacto.usuario.value		=muestraUser;
	document.edst.telefono.value	=muestraTel;
	document.contacto.fecha_dia.value	=muestraDia;
	document.contacto.fecha_mes.value	=muestraMes;
	document.contacto.fecha_anyo.value	=muestraAnyo;
	document.contacto.correu.value		=muestraMail;
	document.contacto.dni.value			=muestraDni;
};





