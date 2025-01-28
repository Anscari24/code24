
function initLocalClocks() {
  document.title = window.name;
  var text = prompt("Introdueix una direccio web");
  var expression = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
  var regex = new RegExp(expression);
  
  while (!text.match(regex)) {
    var text = prompt("Introdueix una direccio web");
  }

  opener.location.href = text;
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  if ((hours>=6)&&(hours<=14)){
    document.getElementById("bones").innerHTML = "Bon dia";
  }else if((hours>14)&&(hours<20)){
    document.getElementById("bones").innerHTML = "Bona tarda";
  }else{
    document.getElementById("bones").innerHTML = "Bona nit";
  }
  document.getElementById("hours").style.transform = 'rotateZ('+ hours*30 +'deg)';
  document.getElementById("minutes").style.transform = 'rotateZ('+ minutes*6 +'deg)';
}