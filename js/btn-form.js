const formNombre = document.getElementById("nombre");
const formEmail = document.getElementById("email");
const formAsunto = document.getElementById("asunto");
const formMensaje = document.getElementById("mensaje");
const btnForm = document.getElementById("form-btn");


btnForm.addEventListener("click", desabilitarBtn())

function desabilitarBtn() {
    if(formNombre.value === "" && formEmail.value === "" && formAsunto.value === "" && formMensaje.value === "") {
        btnForm.style = "disabled";
    }
}