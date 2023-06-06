//public int x;
//var let conts
var arr = [];
var v1 = 0,
  v2 = 0,
  res = 0,
  caja;

function captura1() {
  v1 = document.getElementById("val1").value;
  v1 = Number.parseFloat(v1);
}

function captura2() {
  v2 = document.getElementById("v2").value;
  v2 = Number.parseFloat(v2);
}

function sum() {
  var res = v1 + v2;
  document.querySelector(
    "#resultado"
  ).innerHTML += ` <ul>${v1} + ${v2}=${res}</ul>`;
}
function resta() {
  var res2 = v1 - v2;
  document.querySelector(
    "#resultado"
  ).innerHTML += `<ul> ${v1} - ${v2}=${res2}</ul> `;
}
function mul() {
  var res3 = v1 * v2;
  document.querySelector(
    "#resultado"
  ).innerHTML += ` <ul>${v1} x ${v2}=${res3}</ul> `;
}
function div() {
  var res4 = v1 / v2;

  if (v2 != 0)
    document.querySelector(
      "#resultado"
    ).innerHTML += `<ul> ${v1} /  ${v2}=  ${res4}</ul>`;
  else
    document.querySelector("#resultado").innerHTML += `datos incorrectos <br> `;
}
//eliminar por completo la lista desordenada
function limpiarLista() {
  var lista = document.getElementById("resultado");
  lista.innerHTML = "";
}


//borrar uno por uno la lista desordenada
var borrarButton = document.getElementById("clearDEL");

borrarButton.addEventListener("click", function () {
  var lista = document.getElementById("resultado");

  if (lista.childElementCount > 0) {
    var ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento);
  }
});
