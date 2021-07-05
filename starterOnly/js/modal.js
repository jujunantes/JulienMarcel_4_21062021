// On crée le gestionnaire d'événement du menu hamburger en version téléphone
document.querySelector(".icon").addEventListener("click", editNav);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.getElementById("bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const fermeModalBtn = document.querySelectorAll("#close");
const monTopNav = document.getElementById("myTopnav");
const pageHero = document.getElementById("pageHero");
const monFooter = document.getElementById("myFooter");

// Evenements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event
document.addEventListener("click",
  function(event) {
    // ferme la modale si l'utilisateur clique hors d'elle ou sur sa croix de fermeture
    if (event.target.matches("#bground") || event.target.matches("#close")) {
      modalbg.style.display = "none";
      monTopNav.style.display = "block";
      pageHero.style.display = "grid";
      monFooter.style.display = "block";
      modalbg.style.backgroundColor = "white";
    }
  },
  false
)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  monTopNav.style.display = "none";
  pageHero.style.display = "none";
  monFooter.style.display = "none";
}