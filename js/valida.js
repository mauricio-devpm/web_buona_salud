let ObjetoValidaVinculate = {
    nombres: false,
    apellidos: false,
    telefono: false,
    email: false,
    comentario: true,
}

function ValidaNombres() {
    let nombres = document.getElementById("vin-nombres").value;
    let mensajes = document.getElementById("msg-vin-nombres");
    if (nombres.length < 4) {
        mensajes.innerText = "El nombre es incorrecto";
        mensajes.classList.remove("exito");
        mensajes.classList.add("error");

    } else {
        mensajes.innerText = "El nombre es correcto";
        mensajes.classList.remove("error");
        mensajes.classList.add("exito");
        ObjetoValidaVinculate.nombres = true;
    }
}


function ValidaApellidos() {
    let apellidos = document.getElementById("vin-apellidos").value;
    let mensajes = document.getElementById("msg-vin-apellidos");
    if (apellidos.length < 4) {
        mensajes.innerText = "El apellido es incorrecto";
        mensajes.classList.remove("exito");
        mensajes.classList.add("error");

    } else {
        mensajes.innerText = "El apellido es correcto";
        mensajes.classList.remove("error");
        mensajes.classList.add("exito");
        ObjetoValidaVinculate.apellidos = true;
    }
}


function ValidaTelefono() {
    let telefono = document.getElementById("vin-telefono").value;
    let mensajes = document.getElementById("msg-vin-telefono");
    if (telefono.length < 8) {
        mensajes.innerText = "El telefono es incorrecto";
        mensajes.classList.remove("exito");
        mensajes.classList.add("error");

    } else {
        mensajes.innerText = "El telefono es correcto";
        mensajes.classList.remove("error");
        mensajes.classList.add("exito");
        ObjetoValidaVinculate.telefono = true;
    }
}

function ValidaEmail() {
    let email = document.getElementById("vin-email").value;
    let mensajes = document.getElementById("msg-vin-email");
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!reg.test(email)) {
        mensajes.innerText = "El correo es incorrecto";
        mensajes.classList.remove("exito");
        mensajes.classList.add("error");

    } else {
        mensajes.innerText = "El correo es correcto";
        mensajes.classList.remove("error");
        mensajes.classList.add("exito");
        ObjetoValidaVinculate.email = true;
    }
}

function EnviarMensaje() {
    if (ObjetoValidaVinculate.nombres && ObjetoValidaVinculate.apellidos && ObjetoValidaVinculate.telefono && ObjetoValidaVinculate.email) {
        alert('Su solicitud ha sido enviada, en breve recibirá una respuesta en su correo electrónico.');
        document.getElementById("vin-nombres").value = "";
        document.getElementById("vin-apellidos").value = "";
        document.getElementById("vin-telefono").value = "";
        document.getElementById("vin-email").value = "";
        document.getElementById("vin-comentario").value = "";
    } else {
        alert('Los datos que ha ingresado no son correctos o hay campos vacíos.');
    }
}