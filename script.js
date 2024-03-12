const buttonCounter = document.querySelector("#button-counter");
const numberCounter = document.querySelector("#number-counter");
let counter = parseInt(0);

buttonCounter.addEventListener('click', function(){
  counter++;
  numberCounter.innerHTML = counter;
})

//----------------------------------------------------------------------------//

const keyInput = document.querySelector("#input-keyboard");

keyInput.addEventListener('keydown', function(event){
  alert("A tecla '" + event.key + "' foi pressionada");
})

//----------------------------------------------------------------------------//

const buttonSec = document.querySelector("#button-sec");

buttonSec.addEventListener('click', function(){
  alert("O botão foi clicado");
})

//----------------------------------------------------------------------------//

const soteldo = document.querySelector("#soteldo-img");

soteldo.addEventListener('mouseover', function(){
  alert("Passou o mouse por cima da imagem");
})

//----------------------------------------------------------------------------//

const inputForm = document.querySelector("#input-form");
const inputButton = document.querySelector("#input-button");

inputButton.addEventListener('click', function(){
  inputForm.addEventListener('invalid', evento => evento.preventDefault());
  inputForm.addEventListener("invalid", () => inputForm.style.border = "2px solid red"); 
})