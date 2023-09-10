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
        alert(coup);
        
             }
           else{
            // Félicitation vous avez trouvez le juste prix
            instruction.textContent =  "#"+ coup + "( "+ nombre + ") Félicitation vous avez réussie! ";
            divExistant.prepend(instruction);
            instruction.classList.add('instruction', 'fini');
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
formulaire.addEventListener('submit', (e)=>{
 e.preventDefault();
 if (isNaN(input.value) || (input.value == '')) {
    input.style.borderColor = 'red';
    
 } else {
    coup ++;
    input.style.borderColor = 'green';
    nombreChoisi            = input.value;
    input.value             = '';
    verifier(nombreChoisi);
 }
})



// bouton.addEventListener('click', ()=>{
//     let  inputTest = parseInt(input.value);
   
//     let nombreAleatoire = genererNombreEntier(1001);
//     alert('je suis input  ' + inputTest + 'je suis aleatoire '+ nombreAleatoire);
    
//     if (inputTest == nombreAleatoire) {
//         alert('felicitation')
        
//     } 
//     else if(inputTest > nombreAleatoire){
//         error.style.display = "block";
//         error.textContent   = 'grand';
//         alert('grand');

//          }
//          else{
//            error.style.display = "block";
//             error.textContent   = 'petit';
//             alert('petit');
//     }
        
    
//})