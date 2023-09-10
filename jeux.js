let input      = document.querySelector('#prix');
let error      = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let divExistant = document.querySelector('#instructions')

let coup       = 0;
let nombreChoisi;
let nombreAleatoire = genererNombreEntier(1001);
alert(nombreAleatoire);
// Créer la fonction verifier
function verifier(nombre) {
    let instruction = document.createElement('div');
    if (nombre < nombreAleatoire) {
        // c petit
       
        instruction.textContent = "#"+ coup + "( "+ nombre + ") C'est plus ! ";
        divExistant.prepend(instruction);
        instruction.classList.add('instruction', 'plus');
        
        
    } else if((nombre > nombreAleatoire) ) {
        // c moins
        instruction.textContent =  instruction.textContent = "#"+ coup + "( "+ nombre + ") C'est moins ! ";
        divExistant.prepend(instruction);
        instruction.classList.add('instruction', 'moins');
       
        
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
    }
    else {
           nombreChoisi = input.value; // Convertir la valeur en nombre entier
    
    if (nombreChoisi < 0 || nombreChoisi > 1000) {
        input.style.borderColor = 'red';
        error.textContent = 'Votre nombre doit être entre 0 et 1000. Recommencez.';
        error.style.display = "inline";
      }
    else {
                input.style.borderColor = 'green';
                error.textContent = ''; // Réinitialisez le message d'erreur
                error.style.display = "inline";
                alert(nombreChoisi);
                verifier(nombreChoisi);
        
        
      }
    }
    
    input.value = ''; // Réinitialisez la valeur de l'input après traitement
  });
  



