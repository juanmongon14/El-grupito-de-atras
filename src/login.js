function ingresar() {
    // Obtener el correo electrónico y la contraseña ingresados por el usuario
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contraseña").value;
  
    // Obtener el correo electrónico y la contraseña almacenados en localStorage
    let correoAlmacenado = localStorage.getItem("correo");
    let contrasenaAlmacenada = localStorage.getItem("contraseña");
  
    // Comparar los valores ingresados por el usuario con los valores almacenados en localStorage
    if (correo === correoAlmacenado && contrasena === contrasenaAlmacenada) {
      // Permitir que el usuario ingrese
      alert("Bienvenido/a " + correo + "!");
    } else {
      // Mostrar un mensaje de error si los valores no coinciden
      alert("El correo electrónico o la contraseña son incorrectos. Por favor, inténtalo de nuevo o registrate");
    }
  }
  