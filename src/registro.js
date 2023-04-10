function RevisarPass(){
    let password = document.getElementById("password").value;
    let confPassword = document.getElementById("confPassword").value;
    if (password === "" || password !== confPassword){
        
        alert("Las contraseñas no coinciden, Por favor revisa el dato ingresado o debes aceptar los terminos");
        
        
    }
    else{
        
        guardarInformacion();
        alert("Registro exitoso");
        window.location.href = "../pages/saldo2.html";
        
    }
}


function guardarInformacion(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value.toString();
    var password = document.getElementById("password").value.toString();
    var confPassword = document.getElementById("confPassword").value.toString();
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("celular", celular);
    localStorage.setItem("password", password);
    localStorage.setItem("confPassword", confPassword);
}

const Boton = document.getElementById("boton");
