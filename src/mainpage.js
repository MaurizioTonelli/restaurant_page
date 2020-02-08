function createMainPage(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = "Abarrotes Martín";
    content.appendChild(header);

    const nav = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';
    homeLink.setAttribute('href', '');
    menuLink.setAttribute('href', '');
    contactLink.setAttribute('href', '');

    homeTab.appendChild(homeLink);
    menuTab.appendChild(menuLink);
    contactTab.appendChild(contactLink);
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    content.appendChild(nav);

    const text = document.createElement('p');
    text.textContent = 'Tenemos la mejor seleccion de verduras de San Miguel de Allende. ¡Atrevete a comprar ya canijo!';
    content.appendChild(text);
}

export default createMainPage