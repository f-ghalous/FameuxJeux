let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let bouton     = document.querySelector('button');
input.textContent = 'bonjour';
error.style.display = "none";
error.textContent = 'bbbbbbb';

// géneer un nombre aleatoire
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

bouton.addEventListener('click', ()=>{
    let  inputTest = parseInt(input.value);
   
    let nombreAleatoire = genererNombreEntier(1000);
    alert('je suis input  ' + inputTest + 'je suis aleatoire '+ nombreAleatoire);
    if (inputTest == nombreAleatoire) {
        alert('felicitation')
        
    } 
    else if(inputTest > nombreAleatoire){
        error.style.display = "block";
        error.textContent   = 'grand';
        alert('grand');

         }
         else{
           error.style.display = "block";
            error.textContent   = 'petit';
            alert('petit');
    }
        
    
})