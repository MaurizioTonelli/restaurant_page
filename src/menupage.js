import createHeader from './header';

function createMenuPage(){
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createHeader();

    const list = document.createElement('ul');
    const apples = document.createElement('p');
    apples.textContent = 'apples';
    const oranges = document.createElement('p');
    oranges.textContent = 'oranges';
    const spinach = document.createElement('p');
    spinach.textContent = 'spinach';
    list.appendChild(apples);
    list.appendChild(oranges);
    list.appendChild(spinach);
    content.appendChild(list);
}

export default createMenuPage