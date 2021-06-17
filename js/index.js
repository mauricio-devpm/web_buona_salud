let ObjetoValida = {
    nombre: false,
    apellido: false,
    edad: false,
    telefono: false,
    email: false,
    bandera: false
}

function ValidaNombre() {
    let nombre = document.getElementById("nombre").value;
    let avisonombre = document.getElementById("avisonombre");
    console.log(nombre.length)
    if (nombre.length < 4) {
        avisonombre.classList.remove("avisonom");
        document.getElementById("avisonombre").classList.add("error1");
    } else {
        document.getElementById("avisonombre").classList.remove("error1");
        avisonombre.classList.add("avisonom");
        ObjetoValida.nombre = true;
    }

}

function ValidaApellido() {
    let apellido = document.getElementById("apellido").value;
    let avisoapellido = document.getElementById("avisoapellido");
    console.log(apellido.length)
    if (apellido.length < 4) {
        avisoapellido.classList.remove("avisonom");
        document.getElementById("avisoapellido").classList.add("error1");
    } else {
        document.getElementById("avisoapellido").classList.remove("error1");
        avisoapellido.classList.add("avisonom");
        ObjetoValida.apellido = true;
    }

}

function ValidaEdad() {
    let edad = document.getElementById("edad").value;
    let avisoedad = document.getElementById("avisoedad");
    let edadnumber = Number(edad);
    if (edadnumber < 18 || edadnumber > 100) {
        avisoedad.classList.remove("avisonom");
        document.getElementById("avisoedad").classList.add("error1");
    } else {
        document.getElementById("avisoedad").classList.remove("error1");
        avisoedad.classList.add("avisonom");
        ObjetoValida.edad = true;
    }

}

function ValidaTelefono() {
    let telefono = document.getElementById("telefono").value;
    let avisotelefono = document.getElementById("avisotelefono");
    console.log(telefono.length)
    if (telefono.length < 8) {
        avisotelefono.classList.remove("avisonom");
        document.getElementById("avisotelefono").classList.add("error1");
    } else {
        document.getElementById("avisotelefono").classList.remove("error1");
        avisotelefono.classList.add("avisonom");
        ObjetoValida.telefono = true;
    }


}

function ValidaEmail() {
    let email = document.getElementById("email").value;
    let avisoemail = document.getElementById("avisoemail");
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!reg.test(email)) {
        avisoemail.classList.remove("avisonom");
        document.getElementById("avisoemail").classList.add("error1");
    } else {
        document.getElementById("avisoemail").classList.remove("error1");
        avisoemail.classList.add("avisonom");
        ObjetoValida.email = true;
    }


}

function EnviarMensaje() {
    if (ObjetoValida.nombre && ObjetoValida.apellido && ObjetoValida.edad && ObjetoValida.email && ObjetoValida.telefono) {
        alert('Su solicitud ha sido enviada, en breve recibirá una respuesta en su correo electrónico.');
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";

    } else {
        alert('Los datos que ha ingresado no son correctos o hay campos vacíos.')
    }
}