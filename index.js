/*document.getElementById("ajouter").addEventListener("click", function() {
  document.getElementById("modalAjout").style.display="block";
});

document.getElementById("supprimer").addEventListener("click", function() {
  document.getElementById("modalSup").style.display="block";
  document.getElementById("listeLivre").style.display = "block";
  const afficher = document.querySelectorAll("#listeLivre option:selected button");
  const afficherLivre = document.getElementById("listeLivre");
  afficherLivre.innerHtml="";
  afficher.forEach(function(lecture){
    let option = document.createElement("option");
    option.textContent = lecture.textContent;
    afficherLivre.appendChild(option);

  })
});
//local storage
const storedUserData = localStorage.getItem('ajouter')

if (storedUserData) {
  const userData = JSON.parse(storedUserData)
  // You can use userData here...
} else {
  console.log('User data not found in local storage')
}*/


document.getElementById("ajouter").addEventListener("click", function() {
  document.getElementById("modalAjout").style.display = "block";
});

document.getElementById("supprimer").addEventListener("click", function() {
  document.getElementById("modalSup").style.display = "block";
  document.getElementById("listeLivre").style.display = "block";
  const afficher = document.querySelectorAll("#listeLivre option:selected button");
  const afficherLivre = document.getElementById("listeLivre");
  afficherLivre.innerHtml = "";
  afficher.forEach(function(lecture) {
    let option = document.createElement("option");
    option.textContent = lecture.textContent;
    afficherLivre.appendChild(option);
  });
});

// souniou modal ajouter livre avec bouton
document.querySelector("#modalAjout button[type='button']").addEventListener('click', function() {
  const auteur = document.getElementById('auteur').value;
  const titre = document.getElementById('titre').value;

  if (auteur && titre) {
    const livre = { auteur, titre };
    let livres = JSON.parse(localStorage.getItem('livres')) || [];
    livres.push(livre);
    localStorage.setItem('livres', JSON.stringify(livres));
    
    // apres saisi rek ferme le modal
    document.getElementById('modalAjout').style.display = 'none';

    // Réinitialisation des champs
    document.getElementById('auteur').value = '';
    document.getElementById('titre').value = '';

    // Rafraîchissement de la page pour afficher les nouveaux livres (optionnel) j'ai pas bien compris ici 
    window.location.reload();
  } else {
    alert('Veuillez remplir tous les champs');
  }
});




document.getElementById("modifier").addEventListener("click", function() {
  document.getElementById("modalModif").style.display = "block";
});

// Gestion de l'envoi du formulaire dans le modal de modification pas du tout compris aussi je me suis appuyé sur quelque sites
document.querySelector("#modalModif button[type='button']").addEventListener('click', function() {
  const auteurModif = document.getElementById('auteurModif').value;
  const titreModif = document.getElementById('titreModif').value;

  if (auteurModif && titreModif) {
    // Récupérer l'index du livre à modifier
    const index = document.getElementById('listeLivre').selectedIndex;

    // Récupérer la liste des livres actuelle depuis le localStorage
    let livres = JSON.parse(localStorage.getItem('livres')) || [];

    // Mettre à jour les données du livre à l'index spécifié
    livres[index].auteur = auteurModif;
    livres[index].titre = titreModif;

    // Mettre à jour la liste des livres dans le localStorage
    localStorage.setItem('livres', JSON.stringify(livres));
    
    // Fermeture du modal
    document.getElementById('modalModif').style.display = 'none';

    // Rafraîchissement de la page pour refléter les changements (optionnel)
    window.location.reload();
  } else {
    alert('Veuillez remplir tous les champs');
  }
});






