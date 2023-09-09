let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let bouton     = document.querySelector('button');
input.textContent = 'bonjour';
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
    input.style.borderColor = 'green';
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