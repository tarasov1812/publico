document.addEventListener("DOMContentLoaded", function() {
    let nombre = window.localStorage.getItem("nombreUsuario");
  
    if (nombre) {
      document.getElementById('usuario').innerHTML = '🧝 ' + nombre;
    } else {
      nombre = prompt('Dime el nombre del usuario');
      if (nombre) {
        window.localStorage.setItem("nombreUsuario", nombre);
        document.getElementById('usuario').innerHTML = '🧝 ' + nombre;
      }
    }
  });