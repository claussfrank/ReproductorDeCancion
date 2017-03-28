var cancion;

window.onload = function() {
  cancion=document.getElementById("song");
}
  // funcion para reproducir la  cancion

  function playMusic(){
    cancion.play();
  }
  // funcion para pausa
  function pausaMusic(){
     cancion.pause();
  }
// funcion para  parar la musica
function stopMusic(){
    cancion.load();
}
function backMusic(){
  cancion.currentTime = 1;
}
function endMusic() {
  cancion.currentTime=75;
}
cancion.ontimeupdate = function volumen(){
  var rango=document.getElementById("volumenTime")
  rango.value=cancion.currentTime+=1
}
