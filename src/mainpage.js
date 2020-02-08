import createHeader from './header';

function createMainPage(){
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createHeader();

    const text = document.createElement('p');
    text.textContent = 'Tenemos la mejor seleccion de verduras de San Miguel de Allende. ¡Atrevete a comprar ya canijo!';
    content.appendChild(text);
}

export default createMainPage