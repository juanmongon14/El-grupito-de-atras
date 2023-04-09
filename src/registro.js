function RevisarPass(){
    let password = document.getElementById("password").value;
    let confPassword = document.getElementById("confPassword").value;
    if (password != confPassword){
        alert("Las contraseñas no coinciden, Por favor revisa el dato ingresado");
        this.preventDefault();
    }
    else{
        TyC();
        guardarInformacion();
        alert("Registro exitoso");
        location.href = "../index.html";
    }
}

function TyC() {
var button = document.querySelector("#boton");
button.addEventListener('submit', function CheckTyC(){
    var checkbox = document.querySelector("#checkbox");
    if (!checkbox.checked) {
        alert("Por favor acepte los Términos y Condiciones del servicio.");
        this.preventDefault();
        return false;
    }
    else{
        return true;
    }
})
}

function guardarInformacion(){
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

const Boton = document.getElementById("boton");
Boton.onsubmit = RevisarPass();