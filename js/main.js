let alpha= document.querySelector('img');

alpha.onclick = function() {
    let beta = alpha.getAttribute('src');
    if(beta === 'img/Building.jpg') {
      alpha.setAttribute('src','img/Manoj.jpg');
    } else {
      alpha.setAttribute('src','img/Building.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Gilman, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Gilman ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }