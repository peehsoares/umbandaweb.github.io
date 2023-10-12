let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'imagens/atabaque2.png') {
    myImage.setAttribute ('src','imagens/atabaque2.png');
  } else {
    myImage.setAttribute ('src','imagens/atabaque2.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Insira seu nome.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Olá povo de Axé, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Olá povo de Axé, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}