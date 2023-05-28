// mododianoche

document.addEventListener("DOMContentLoaded", function() {
    let modo = leerModoActual();
    aplicarEstilo(modo);
  });
  
  function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    if (!modo) {
      modo = "dia";
    }
    return modo;
  }
  
  function aplicarEstilo(modo) {
    let todo = document.getElementById("todo");
    if (todo) {
      if (modo === "dia") {
        todo.style.backgroundColor = "aquamarine";
        todo.style.color = "black";
      } else {
        todo.style.backgroundColor = "darkcyan";
        todo.style.color = "white";
      }
    }
  }
  
  function ponerModoDia() {
    window.localStorage.setItem("modoGuardado", "dia");
    aplicarEstilo("dia");
    actualizarIconos();
  }
  
  function ponerModoNoche() {
    window.localStorage.setItem("modoGuardado", "noche");
    aplicarEstilo("noche");
    actualizarIconos();
  }
  
  function actualizarIconos() {
    let iconoDia = document.getElementById("dia");
    let iconoNoche = document.getElementById("noche");
    if (iconoDia && iconoNoche) {
      let modo = leerModoActual();
      if (modo === "dia") {
        iconoDia.style.display = "none";
        iconoNoche.style.display = "block";
      } else {
        iconoDia.style.display = "block";
        iconoNoche.style.display = "none";
      }
    }
  }
  
  const dia = document.getElementById("dia");
  const noche = document.getElementById("noche");
  
  if (dia) {
    dia.onclick = ponerModoDia;
  }
  
  if (noche) {
    noche.onclick = ponerModoNoche;
  }
  
  actualizarIconos();
  