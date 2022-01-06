// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// practice
const pWithRedText = document.createElement('p');
pWithRedText.textContent = "Hey I'm red!";
pWithRedText.style.color = "red";

const h3WithBlueText = document.createElement('h3');
h3WithBlueText.textContent = "I'm a blue h3";
h3WithBlueText.style.color = "blue";

container.appendChild(pWithRedText);
container.appendChild(h3WithBlueText);

const aDivBlackBorder = document.createElement('div');
aDivBlackBorder.style.border = "5px solid black";
aDivBlackBorder.style.backgroundColor = "pink";

const h_1 = document.createElement('h1');
h_1.textContent = "I'm in a div";

const pMeToo = document.createElement('p');
pMeToo.textContent = "ME TOO!";

aDivBlackBorder.appendChild(h_1);
aDivBlackBorder.appendChild(pMeToo);

container.appendChild(aDivBlackBorder);




