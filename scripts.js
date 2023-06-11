const menu = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-nav");

function menudenav(){
    onMenu();
    offMenu();
}

function onMenu() {
    menu.style.display = "flex";
}

function offMenu() {
    menu.style.display = "none";
}
//btnMenu.addEventListener("click", onMenu);

//btnMenu.addEventListener("click", offMenu);