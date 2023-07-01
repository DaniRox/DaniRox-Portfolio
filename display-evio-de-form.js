const btnClose = document.querySelector(".form-msj-de-envio__div-btn-close");
const divMsjEnvio = document.getElementById("container__form-msj-de-envio");
const msjEnvio = document.querySelector(".form-msj-de-envio");


function displayEnvioDeForm() {
    if (divMsjEnvio.style.display === "flex" && msjEnvio.style.display === "flex") {
        divMsjEnvio.style.display = "none";
        msjEnvio.style.display = "none";
    } else {
        divMsjEnvio.style.display = "flex";
        msjEnvio.style.display = "flex";
    }
}