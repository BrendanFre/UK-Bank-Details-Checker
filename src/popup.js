'use strict';

import './popup.css';
import './popupv2.css';

const app = document.querySelector('.app');
const mainContainer = document.createElement('div');
const headerContainer = document.createElement('div');
const bodyContainer = document.createElement('div');
const footerContainer = document.createElement('div');
const sortCodeContainer = document.createElement('div');

mainContainer.classList.add('mainContainer');
bodyContainer.classList.add('bodyContainer');
footerContainer.classList.add('footerContainer');
sortCodeContainer.classList.add('sortCodeContainer');

function createHeader(parent) {
  const header = document.createElement('h1');
  header.textContent = "UK Bank Checker";
  parent.classList.add('headerContainer');
  parent.appendChild(header);
}

const flipToNext = (id, idNumber) => {
  const currentBox = document.querySelector('#' + id);
  const sortCode = document.querySelectorAll('.sortCode');
  const currentValue = currentBox.value;
  const nextBox = idNumber += 1;
  console.log(currentValue.length);
  console.log('the id:' + idNumber);
  if(nextBox < 3 && currentValue.length == 2) {
    console.log('go to next box');
    
    sortCode[nextBox].focus();
  }
  currentBox.style.backgroundColor = 'blue';
}

const createSubmit = (parent) => {
  const theButton = document.createElement('input');
  theButton.type = 'submit';
  theButton.textContent = 'Submit';
  theButton.classList.add('submitButton');
  parent.appendChild(theButton);
}

function createSortCode(parent, id, idNumber){
  const inputBox = document.createElement('input');
  inputBox.type = "text";
  inputBox.classList.add('sortCode');
  inputBox.id = id;
  inputBox.tabIndex = id + 1;
  inputBox.maxLength = 2;
  inputBox.addEventListener('keyup', () => {flipToNext(id, idNumber)})

  parent.appendChild(inputBox);

}

for(let i = 0; i < 3; ++i) {
  const newId = "box" + i;
  createSortCode(sortCodeContainer, newId, i);
}

// bodyContainer.appendChild(boxOne);

createHeader(headerContainer);

bodyContainer.appendChild(sortCodeContainer);
createSubmit(footerContainer);
mainContainer.appendChild(headerContainer);
mainContainer.appendChild(bodyContainer);
mainContainer.appendChild(footerContainer);

app.appendChild(mainContainer);
