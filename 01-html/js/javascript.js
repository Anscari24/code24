function otraAlerta() {
  window.confirm("Esta ventana es un confirm. apreta 'aceptar' para cerrarlo");
}
var miVideo = document.getElementById("musicos");

function reproducePara() {
  if (miVideo.paused) miVideo.play();
  else miVideo.pause();
}
function big() {
  miVideo.width = 560;
}

function small() {
  miVideo.width = 320;
}

function normal() {
  miVideo.width = 420;
}
