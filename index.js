window.onload = inicio;
let nIntervId;
let nombreCaja;
var caja1;
var caja2;
var caja3;
var arrayImagenes = [
  "pacmanAmarillo.png",
  "pacmanMorado.png",
  "pacmanRojo.png",
];

function inicio() {
  document.getElementById("buttonStop").addEventListener("click", stop);
  document.getElementById("buttonStart").addEventListener("click", start);
  caja1 = document.querySelector(".caja1 img");
  caja2 = document.querySelector(".caja2 img");
  caja3 = document.querySelector(".caja3 img");
  reset();
}

function reset() {
  //función que resetea las cajas con el logo de pacman redondo para empezar

  caja1.src = "images/" + "pacmanOrigen.png";
  caja2.src = "images/" + "pacmanOrigen.png";
  caja3.src = "images/" + "pacmanOrigen.png";
}

function showCajas() {
  /*Escoge al azar números entre 0 y 2 */
  caja1.src =
    "images/" + arrayImagenes[Math.floor(Math.random() * arrayImagenes.length)];
  caja2.src =
    "images/" + arrayImagenes[Math.floor(Math.random() * arrayImagenes.length)];
  caja3.src =
    "images/" + arrayImagenes[Math.floor(Math.random() * arrayImagenes.length)];
}

function stop() {
  clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
  document.querySelector(".message").innerHTML = " ";
  //showCajas();
  check();
}
function start() {
  //función que realiza el efecto de ruleta de búsqueda
  // comprobar si ya se ha configurado un intervalo
  if (!nIntervId) {
    nIntervId = setInterval(showCajas, 500);
  }
}

function check() {
  if (caja1.src == caja2.src && caja2.src == caja3.src) {
    console.log("you win");
    document.querySelector(".message").innerHTML = "YOU WIN!!";
  }
}
