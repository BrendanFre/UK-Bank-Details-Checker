'use strict';

import './popup.css';

const app = document.querySelector('.app');
const mainContainer = document.createElement('div');
const headerContainer = document.createElement('div');
const bodyContainer = document.createElement('div');
const footerContainer = document.createElement('div');

mainContainer.classList.add('mainContainer');

function createHeader(parent) {
  const header = document.createElement('h1');
  header.textContent = "UK Bank Checker";
  parent.appendChild(header);
}

createHeader(headerContainer);

mainContainer.appendChild(headerContainer);
mainContainer.appendChild(bodyContainer);
mainContainer.appendChild(footerContainer);

app.appendChild(mainContainer);

app.appendChild(mainContainer)
