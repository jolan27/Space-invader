var posMissilX;
var posMissilY;

function pewPew() {
    posMissilX =posShipX;
    posMissilY = posShipY - 1;

    plateau[posMissilY][posMissilX].src = "missile-fotor-2024040911551.png"
    setTimeout(function() {
        deplacementMissile(posMissilY, posMissilX);
    }, 500)
}

function deplacementMissile(y, x) {
    // Efface l'image du missile des coordonnées actuelles
    plateau[y][x].src = 'Fond_blanc.svg.webp';

    // Détermine les nouvelles coordonnées du missile
    var newY = y - 1;
    var newX = x;

    // Vérifie si le missile est sorti du plateau
    if (newY < 0) {
        return; // Sort de la fonction si le missile est sorti du plateau
    }

    // Affiche l'image du missile aux nouvelles coordonnées
    plateau[newY][newX].src = 'missile-fotor-2024040911551.png';

    // Appelle récursivement la fonction deplacementMissile avec un délai de 200ms
    setTimeout(function() {
        deplacementMissile(newY, newX);
    }, 500);}