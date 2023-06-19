const navMenu = document.querySelector(".nav-menu");
const btnMenu = document.getElementById("nav-button");

function displayMenu() {
    if(navMenu.style.display === "none"){
        navMenu.style.display = "flex";
    }else {
        navMenu.style.display = "none";
    }
}
