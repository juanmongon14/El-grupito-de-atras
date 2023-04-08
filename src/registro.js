// function verificarPasswords() {
//      if (password != confPassword) {
//         document.getElementById("error").classList.add("mostrar");
//         return false;
//     } else {
//         document.getElementById("error").classList.remove("mostrar");
//     }
//  }


var Boton = document.getElementById("boton");
    Boton.onclick = VerificarPass();
    Boton.onclick = CheckTyS();

function VerificarPass(){
    if (password != confPassword){
        alert("Las contraseñas no coinciden, vuelve a intentar");
        this.preventDefault();
    }
    else{
        guardarInformacion();
        CheckTyS();
        alert("Registro exitoso");
    }
}

function CheckTyS(){
    var checkbox = document.getElementById("checkbox");
    if (checkbox.attr('checked', true)){
    return true;
    }
    else{
    alert("Por favor acepte los Términos y Condiciones del servicio.");
    this.preventDefault();
    return false;
    }
}

function guardarInformacion(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var password = document.getElementById("password").value;
    var confPassword = document.getElementById("confPassword").value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("celular", celular);
    localStorage.setItem("password", password);
    localStorage.setItem("confPassword", confPassword);
}