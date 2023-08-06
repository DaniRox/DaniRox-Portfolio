const description = document.getElementById("project-description");
const title = document.getElementById("project-title");


function displayDescription(){
    if(description.style.display === "flex"){
        description.style.display = "none";
    }
}

title.addEventListener("onmousedown", displayDescription);