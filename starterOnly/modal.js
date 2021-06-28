function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector("#bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const fermeModalBtn = document.querySelectorAll("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Evenement ferme la modale
fermeModalBtn.forEach(elt => elt.addEventListener("click", fermeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ferme la modale
function fermeModal() {
  modalbg.style.display = "none";
}