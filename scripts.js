const menu = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-nav");

function displayMenu() {
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    }else {
        menu.style.display = "none";
    }
}
