const description = document.querySelector("#project-description");
const title = document.querySelector("#project-title");


function displayDescription(){
    if(description.style.display === "flex"){
        description.style.display = "none";
    } else {
        description.style.display = "flex";
    }
}