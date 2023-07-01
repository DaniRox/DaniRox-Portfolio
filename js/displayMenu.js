const navMenu = document.querySelector(".nav-menu");
const btnMenu = document.getElementById("nav-button");

function displayMenu() {
    if(navMenu.style.display === "flex"){
        navMenu.style.display = "none";
    }else {
        navMenu.style.display = "flex";
    }
}

btnMenu.addEventListener("click", displayMenu);