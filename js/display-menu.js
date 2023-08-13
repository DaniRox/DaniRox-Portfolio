const menuNav = document.getElementById("menu-nav");
const btnMenu = document.getElementById("btn-menu-nav");


function displayMenu(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "flex";
    }
}

btnMenu.addEventListener("click", displayMenu);

function displayMenuDesktop(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
    }
}