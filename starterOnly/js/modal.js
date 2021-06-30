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

// Evenements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event
document.addEventListener("click",
  function(event) {
    // ferme la modale si l'utilisateur clique hors d'elle ou sur sa croix de fermeture
    if (event.target.matches("#bground") || event.target.matches("#close"))
      modalbg.style.display = "none";
  },
  false
)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}