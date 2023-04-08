

  let usuarios = {
    lista: [
      { correo: "jaunse@hotmail.com", contraseña: "123" },
      { correo: "juanes@gmail.com", contraseña: "456" },
      { correo: "valen@gmail.com", contraseña: "789" }
    ]
  };

  let correo = "valen@gmail.com";
  let contraseña = "789";
    
  
  // Función validarUsuario
function validarUsuario(correo, contraseña) {
    // Recorrer la lista de usuarios en el objeto JSON usuarios
    for (let i = 0; i < usuarios.lista.length; i++) {
      // Verificar si el correo electrónico y la contraseña coinciden con algún usuario en la lista
      if (correo === usuarios.lista[i].correo && contraseña === usuarios.lista[i].contraseña) {
        // Devolver true si el usuario es válido
        return true;
      }
    }
    // Devolver false si el usuario no es válido
    return false;
  }


  if (validarUsuario(correo, contraseña)) {
    localStorage.setItem("correo", correo);
    localStorage.setItem("contraseña", contraseña);
    // Permitir que el usuario ingrese al sistema
  } else {
    // Mostrar un mensaje de error si los valores no coinciden
    alert("El correo electrónico o la contraseña son incorrectos. Por favor, inténtalo de nuevo.");
  }
  



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
  