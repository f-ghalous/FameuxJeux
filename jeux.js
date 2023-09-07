let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let bouton     = document.querySelector('button');
input.textContent = 'bonjour';
error.style.display = "none";

// géneer un nombre aleatoire
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let nombreAleatoire = genererNombreEntier(1000);
alert(nombreAleatoire);
bouton.addEventListener('click', ()=>{
    let  inputTest = parseInt(input.value);
    alert('je suis input  ' + inputTest);
    console.log(inputTest);
    if (inputTest == nombreAleatoire) {
        alert('felicitation')
        
    } 
    else if(inputTest > nombreAleatoire){
        error.style.display = "block";
        error.textContent   = 'bonjour';
        alert('grand');

         }
         else{
            error.style.display = "block";
            error.textContent   = 'bonjourrrrrrrrrrr';
            alert('petit');
    }
        
    
})