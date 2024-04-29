var posShipY = hauteur - 1; 
var posShipX = Math.floor((largeur - 1) / 2);

// Fonction pour lancer la partie en plaçant le vaisseau sur le plateau
function lancerPartie() {
    plateau[posShipY][posShipX].src = 'vaisseau2-fotor-20240409114636.png'; 
}


function effaceShip() {
    plateau[posShipY][posShipX].src = 'Fond_blanc.svg.webp'; // Remplace l'image du vaisseau par l'image vide
}

// Fonction pour afficher l'image du vaisseau à sa nouvelle position
function afficheShip() {
    plateau[posShipY][posShipX].src = 'vaisseau2-fotor-20240409114636.png'; // Remplace l'image vide par l'image du vaisseau
}

function deplacerVaisseau(event) {
    // Gestion des déplacements
    switch (event.code) {
        case "ArrowLeft":
            effaceShip();
            if (posShipX > 0) {
                posShipX--;
            }
            afficheShip();
            break;
        case "ArrowRight":
            effaceShip();
            if (posShipX < largeur - 1) {
                posShipX++;
            }
            afficheShip();
            break;
        case "ArrowUp":
            pewPew();
            break;
    }
}

window.addEventListener("keydown", deplacerVaisseau);