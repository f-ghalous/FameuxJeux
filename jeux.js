let input      = document.querySelector('#prix');
let error      = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let divExistant = document.querySelector('#instructions')
let bouton     = document.querySelector('button');
let coup       = 0;
let nombreChoisi;
// Créer la fonction verifier
function verifier(nombre) {
    let instruction = document.createElement('div');
    let nombreAleatoire = genererNombreEntier(1001);
    if (nombre < nombreAleatoire) {
        // c petit
       
        instruction.textContent = "#"+ coup + "( "+ nombre + ") C'est moins ! ";
        divExistant.prepend(instruction);
        instruction.classList.add('instruction', 'moins');
        
        
    } else if((nombre> nombreAleatoire) && (coup < 3)) {
        // c moins
        instruction.textContent =  instruction.textContent = "#"+ coup + "( "+ nombre + ") C'est plus ! ";
        divExistant.prepend(instruction);
        instruction.classList.add('instruction', 'plus');
       
        
             }
           else{
            // Félicitation vous avez trouvez le juste prix
            instruction.textContent =  "#"+ coup + "( "+ nombre + ") Félicitation vous avez réussie! ";
            divExistant.prepend(instruction);
            instruction.classList.add('instruction', 'fini');
            input.disabled = true;
           }
  
    
}








error.style.display = "none";
//error.textContent = 'bbbbbbb';

// géneer un nombre aleatoire

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
// gérer les erreurs de l'utilisateur
input.addEventListener('keyup', ()=>{
    if (isNaN(input.value)) {
        error.style.display = "inline";
       
    } else {
        error.style.display = "none";
   
    }
})
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (isNaN(input.value) || input.value === '') {
      input.style.borderColor = 'red';
    } else {
           nombreChoisi = parseInt(input.value, 10); // Convertir la valeur en nombre entier
    
      if (nombreChoisi < 0 || nombreChoisi > 1000) {
        input.style.borderColor = 'red';
        error.textContent = 'Votre nombre doit être entre 0 et 1000. Recommencez.';
        error.style.display = "inline";
      } else {
        input.style.borderColor = 'green';
        error.textContent = ''; // Réinitialisez le message d'erreur
        error.style.display = "inline";
        
        // Faites ce que vous devez faire avec la valeur valide (coup ++, etc.)
        verifier(nombreChoisi);
      }
    }
    
    input.value = ''; // Réinitialisez la valeur de l'input après traitement
  });
  



