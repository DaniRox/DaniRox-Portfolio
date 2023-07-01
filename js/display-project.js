const project1 = document.getElementById("project1");
const infoProject1 = document.querySelector(".info-project1");
const divInfoProject1 = document.querySelector(".div-info-project1");

const project2 = document.getElementById("project2");
const infoProject2 = document.querySelector(".info-project2");
const divInfoProject2 = document.querySelector(".div-info-project2");

const project3 = document.getElementById("project3");
const infoProject3 = document.querySelector(".info-project3");
const divInfoProject3 = document.querySelector(".div-info-project3");

const project4 = document.getElementById("project4");
const infoProject4 = document.querySelector(".info-project4");
const divInfoProject4 = document.querySelector(".div-info-project4");

const project5 = document.getElementById("project5");
const infoProject5 = document.querySelector(".info-project5");
const divInfoProject5 = document.querySelector(".div-info-project5");

const project6 = document.getElementById("project6");
const infoProject6 = document.querySelector(".info-project6");
const divInfoProject6 = document.querySelector(".div-info-project6");

function displayInfo1 () {
    if(infoProject1.style.display === "flex" && divInfoProject1.style.display === "flex") {
        infoProject1.style.display = "none";
        divInfoProject1.style.display = "none";
    } else {
        infoProject1.style.display = "flex";
        divInfoProject1.style.display = "flex";
    }
}

function displayInfo2 () {
    if(infoProject2.style.display === "flex" && divInfoProject2.style.display === "flex") {
        infoProject2.style.display = "none";
        divInfoProject2.style.display = "none";
    } else {
        infoProject2.style.display = "flex";
        divInfoProject2.style.display = "flex";
    }
}

function displayInfo3 () {
    if(infoProject3.style.display === "flex" && divInfoProject3.style.display === "flex") {
        infoProject3.style.display = "none";
        divInfoProject3.style.display = "none";
    } else {
        infoProject3.style.display = "flex";
        divInfoProject3.style.display = "flex";
    }
}

function displayInfo4 () {
    if(infoProject4.style.display === "flex" && divInfoProject4.style.display === "flex") {
        infoProject4.style.display = "none";
        divInfoProject4.style.display = "none";
    } else {
        infoProject4.style.display = "flex";
        divInfoProject4.style.display = "flex";
    }
}

function displayInfo5 () {
    if(infoProject5.style.display === "flex" && divInfoProject5.style.display === "flex") {
        infoProject5.style.display = "none";
        divInfoProject5.style.display = "none";
    } else {
        infoProject5.style.display = "flex";
        divInfoProject5.style.display = "flex";
    }
}

function displayInfo6 () {
    if(infoProject6.style.display === "flex" && divInfoProject6.style.display === "flex") {
        infoProject6.style.display = "none";
        divInfoProject6.style.display = "none";
    } else {
        infoProject6.style.display = "flex";
        divInfoProject6.style.display = "flex";
    }
}



project1.addEventListener("click", displayInfo1);
project2.addEventListener("click", displayInfo2);
project3.addEventListener("click", displayInfo3);
project4.addEventListener("click", displayInfo4);
project5.addEventListener("click", displayInfo5);
project6.addEventListener("click", displayInfo6);
