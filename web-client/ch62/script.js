
document.addEventListener("DOMContentLoaded", function () {
    function showPopup() {
        alert("Ceci est une alerte qui s'affiche toutes les 10 secondes !");
    }
    
    // Afficher une première alerte au démarrage
    showPopup();
    
    // Déclencher l'alerte toutes les 10 secondes
    setInterval(showPopup, 10000);
});
