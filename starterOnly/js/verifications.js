// constantes
const formulaire = document.getElementById("formulaire");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const naissance = document.getElementById("birthdate");
const tournois = document.getElementById("quantity");
const conditions = document.getElementById("checkboxConditions");

function validate() {
    var validiteFormulaire = true;

    // Validation du prénom (min 2 chars, pas vide)
    let prenomEntre = prenom.value.trim();
    if (prenomEntre === "") {
		document.getElementById("erreurPrenom").innerHTML = "Merci d'entrer un prénom";
		validiteFormulaire = false;
	} else if (prenomEntre.length < 2) {
		document.getElementById("erreurPrenom").innerHTML = "Le prénom doit comporter au moins 2 lettres";
		validiteFormulaire = false;
	} else {
		document.getElementById("erreurPrenom").innerHTML = "";
	}

    // Validation du Nom (min 2 chars, pas vide)
    let nomEntre = nom.value.trim();
    if (nomEntre === "") {
		document.getElementById("erreurNom").innerHTML = "Merci d'entrer un nom";
		validiteFormulaire = false;
	} else if (nomEntre.length < 2) {
		document.getElementById("erreurNom").innerHTML = "Le nom doit comporter au moins 2 lettres";
		validiteFormulaire = false;
	} else {
		document.getElementById("erreurNom").innerHTML = "";
	}

    // Validation de l'email
    let emailEntre = email.value.trim();
    if (emailEntre === "") {
		document.getElementById("erreurEmail").innerHTML = "Merci d'entrer une adresse email";
		validiteFormulaire = false;
	} else {
        // source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(emailEntre)){
            document.getElementById("erreurEmail").innerHTML = "";
        } else {
            document.getElementById("erreurEmail").innerHTML = "Veuillez entrer une adresse email valide";
		    validiteFormulaire = false;
        }
	}

    // Validation de la date de naissance
    let dateEntree = naissance.value.trim();
    if (dateEntree === "") {
        document.getElementById("erreurNaissance").innerHTML = "Merci d'entrer une date de naissance";
		validiteFormulaire = false;
    } else {
        var jeanneCalment = new Date(1875, 2, 21).toISOString().slice(0, 10);
        var maintenant = new Date().toISOString().slice(0, 10);
        if ((dateEntree > jeanneCalment) && (dateEntree < maintenant)) {
            document.getElementById("erreurNaissance").innerHTML = "";
        } else {
            document.getElementById("erreurNaissance").innerHTML = "Merci d'entrer votre vraie date de naissance";
            validiteFormulaire = false;
        }
    }

    // Validation du nombre de tournois
    let tournoisEntres = tournois.value.trim();
    if (tournoisEntres === "") {
        document.getElementById("erreurTournois").innerHTML = "Merci de renseigner le nombre de tournois joués";
		validiteFormulaire = false;
    } else {
        if ((tournoisEntres >= 0) && (tournoisEntres <= 99)) {
            document.getElementById("erreurTournois").innerHTML = "";
        } else {
            document.getElementById("erreurTournois").innerHTML = "Veuillez entrer un nombre entre 0 et 99 compris";
		    validiteFormulaire = false;
        }
    }

    // Validation de la ville du joueur
    let choixVille = document.querySelector('input[name = "location"]:checked');
	if (choixVille !== null) {
		document.getElementById("erreurVille").innerHTML = "";
	} else {
		document.getElementById("erreurVille").innerHTML = "Veuillez choisir votre ville";
		validiteFormulaire = false;
	}

    // Validation des conditions (Elles doivent être acceptés pour que l'enregistrement soit effectué)
    if (!conditions.checked) {
		document.getElementById("erreurConditions").innerHTML = "Veuillez accepter ces conditions pour valider votre inscription";
		validiteFormulaire = false;
	} else {
		document.getElementById("erreurConditions").innerHTML = "";
	}

    return validiteFormulaire;
}

function validerFormulaire(event) {
    if(validate()){
        formulaire.style.minHeight = formulaire.clientHeight +"px"; // Pour que la modale conserve la même hauteur

        formulaire.className = "centrage centrageVertical";
        formulaire.innerText = "Merci, votre inscription est validée !";
        // Ajoutons un bouton de fermeture
        const monBr = document.createElement("br");
        formulaire.appendChild(monBr);
        const monBr2 = document.createElement("br");
        formulaire.appendChild(monBr2);
        const monBouton = document.createElement("button");
        monBouton.innerHTML = "Fermer";
        monBouton.className = "btn-signup modal-btn centrage margeBouton";
        formulaire.appendChild(monBouton);
    }
    else {
        event.preventDefault();
        return false;
    }
}

// On crée le gestionnaire d'événement interceptant le clic du bouton de soumission
document.querySelector(".btn-submit").addEventListener("click", validerFormulaire);
