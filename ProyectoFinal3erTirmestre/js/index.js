document.addEventListener("DOMContentLoaded", function() {
    let nombre = window.sessionStorage.getItem("nombreUsuario");
  
    if (nombre) {
      document.getElementById('usuario').innerHTML = '🧝 ' + nombre;
    } else {
      nombre = prompt('Dime el nombre del usuario');
      if (nombre) {
        window.sessionStorage.setItem("nombreUsuario", nombre);
        document.getElementById('usuario').innerHTML = '🧝 ' + nombre;
      }
    }
  });