
function taulaplena(){
	var taula = "<table class='table' onclick='taulabuida()'>";
	var columnes = 2;
	var files = 12;
	var ct=0;
	var cf=0;
	var contador=0;
	var max=Number.MAX_VALUE;
	var min=Number.MIN_VALUE;
	var textos=["PROPIEDAD","VALOR OBTENIDO CON JS","Valor máximo que puede tener un número en JavaScript",max,"Valor mínimo que puede tener un número en JavaScript",min,"Altura total de la pantalla",screen.height+" px","Anchura total de la pantalla",screen.width+" px","Altura de la página web",screen.availHeight+" px","Anchura de la página web ",screen.availWidth+" px","URL de la página web",window.location.href,"Nombre de la página web con su extensión (index.html)",location.pathname.substring(location.pathname.lastIndexOf("/") + 1),"Nombre de la página web sin su extensión (index)",location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5),"Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)",(Math.floor(Math.random()*200)+0),"Sistema operativo del ordenador.",navigator.platform];
	while (ct<columnes){
		taula = taula + "<tr>"
		while (cf<files){
				taula = taula + "<td>" + textos[contador] + "</td>";
			cf++;
			contador++;
		}
		taula = taula + "</tr>"
		cf=0;
		ct++;
	}
	 document.getElementById("taula").innerHTML = (taula);
}
function taulabuida(){
	document.getElementById("taula").innerHTML = ("<span onclick='taulaplena()'>Ensenya'm la taula</span>");
}
function cookies(){
	if (navigator.cookieEnabled){
		var acceptes = confirm("Tens les cookies activades, la nostra web usa cookies, et vols quedar?");
	    if (acceptes == false) {
	    	location.replace("https://www.google.es/");
		}
	}else{
		var acceptes = confirm("Tens les cookies desactivades, la nostra web usa cookies, et vols quedar?");
	    if (acceptes == false) {
	    	location.replace("https://www.google.es/");
		}

	}
}
function titol(){
	var text = prompt("Dona'm un titol per la pagina", "el deixare en majuscules");
	text2=text.replace(/\s/g,"");
	while (text2==""){
		var text = prompt("Dona'm un titol per la pagina", "el deixare en majuscules");
		text2=text.replace(/\s/g,"");
	}
	text=text.toUpperCase();
	document.title=text;
}
function rellotge(){
	var text = prompt("Dona'm un el titol de la nova pagina (minim 3 caracters, maxim 20) i digam si vols barra o no (si no), separem les dues coses amb una coma", "ex: titol,si");
	var titol=text.substr(0,text.indexOf(","));
	var barra=text.substr(text.indexOf(",")+1,text.length);
	var correcte=0;
	if (barra=="si"){
		correcte=1;
		barra="yes";
	}
	if(barra=="no"){
		correcte=1;
	}
	while ((titol.length>20)||(titol.length<3)||(correcte==0)){
		var text = prompt("Dona'm un el titol de la nova pagina (minim 3 caracters, maxim 20) i digam si vols barra o no (si no), separem les dues coses amb una coma", "ex: titol,si");
		var titol=text.substr(0,text.indexOf(","));
		var barra=text.substr(text.indexOf(",")+1,text.length);
		if (barra=="si"){
			correcte=1;
			barra="yes";
		}
		if(barra=="no"){
			correcte=1;
		}
	}
	var args ="width="+(Math.floor(Math.random()*200)+200)+",";
	var args=args+"scrollbars="+barra+",height=400";
	alert(args);
	window.open("rellotje.html",titol,args);
}