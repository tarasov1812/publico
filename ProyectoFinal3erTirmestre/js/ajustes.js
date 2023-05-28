
// Ajustes
function aplicarCambios() {
  let color = document.getElementsByName('colorElegido')[0];
  let author = document.getElementsByName('nombre')[0];
  let nombreElegido = author[author.selectedIndex].value;
  let estiloTexto = document.querySelector('input[name="estiloTexto"]:checked').value;

  // Guardar valores en localStorage
  window.localStorage.setItem("backgroundColor", color.value);
  window.localStorage.setItem("nombreElegido", nombreElegido);
  window.localStorage.setItem("estiloTexto", estiloTexto);

  // Aplicar valores a un elemento al cargar la página
  document.getElementById('author').style.backgroundColor = color.value;
  document.getElementById('author').innerHTML = nombreElegido;
  document.getElementById('authorModal').style.backgroundColor = color.value;
  document.getElementById('authorModal').innerHTML = nombreElegido;
  
  // Aplicar estilo de texto
  if (estiloTexto === "normal") {
    document.getElementById('author').style.fontStyle = "normal";
    document.getElementById('author').style.textTransform = "none";
    document.getElementById('authorModal').style.fontStyle = "normal";
    document.getElementById('authorModal').style.textTransform = "none";
  } else if (estiloTexto === "cursiva") {
    document.getElementById('author').style.fontStyle = "italic";
    document.getElementById('author').style.textTransform = "none";
    document.getElementById('authorModal').style.fontStyle = "italic";
    document.getElementById('authorModal').style.textTransform = "none";
  } else if (estiloTexto === "minusculas") {
    document.getElementById('author').style.fontStyle = "normal";
    document.getElementById('author').style.textTransform = "lowercase";
    document.getElementById('authorModal').style.fontStyle = "normal";
    document.getElementById('authorModal').style.textTransform = "lowercase";
  }
}

// Aplicar los valores almacenados al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  let colorGuardado = window.localStorage.getItem("backgroundColor");
  let nombreGuardado = window.localStorage.getItem("nombreElegido");
  let estiloTextoGuardado = window.localStorage.getItem("estiloTexto");

  if (colorGuardado) {
    document.getElementById('author').style.backgroundColor = colorGuardado;
    document.getElementById('authorModal').style.backgroundColor = colorGuardado;
  }

  if (nombreGuardado) {
    document.getElementById('author').innerHTML = nombreGuardado;
    document.getElementById('authorModal').innerHTML = nombreGuardado;
  }
  
  if (estiloTextoGuardado) {
    if (estiloTextoGuardado === "normal") {
      document.getElementById('author').style.fontStyle = "normal";
    document.getElementById('author').style.textTransform = "none";
    document.getElementById('authorModal').style.fontStyle = "normal";
    document.getElementById('authorModal').style.textTransform = "none";
    } else if (estiloTextoGuardado === "cursiva") {
      document.getElementById('author').style.fontStyle = "italic";
    document.getElementById('author').style.textTransform = "none";
    document.getElementById('authorModal').style.fontStyle = "italic";
    document.getElementById('authorModal').style.textTransform = "none";
    } else if (estiloTextoGuardado === "minusculas") {
      document.getElementById('author').style.fontStyle = "normal";
    document.getElementById('author').style.textTransform = "lowercase";
    document.getElementById('authorModal').style.fontStyle = "normal";
    document.getElementById('authorModal').style.textTransform = "lowercase";
    }
  }
  let nombre = window.localStorage.getItem("nombreUsuario");
  
    if (nombre) {
      document.getElementById('usuario').innerHTML = '🧝 ' + nombre;
    }
    console.log('Usuario logado - ' + nombre);
    console.log('Aleksandr Tarasov, 1DAW, CENEC');
});

  // Llamar a la función al hacer clic en el botón "Aplicar"
  let botonAplicar = document.getElementById('aplicar');
  if(botonAplicar!== null){
    botonAplicar.onclick = aplicarCambios;
  }