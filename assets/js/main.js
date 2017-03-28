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
//retrocedemos la musica
function backMusic(){
  cancion.currentTime -= 1;
}
//adelantamos la musica
function endMusic() {
  cancion.currentTime+=75;
}
function volumenMas(){
  cancion.volume += 0.1;
}
function volumenMenos(){
  cancion.volume -= 0.1;
}
/*cancion.ontimeupdate = function volumen(){
  var rango=document.getElementById("volumenTime")
  rango.value=cancion.currentTime+=1
}*/
