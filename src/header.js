function createHeader(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = "Abarrotes Martín";
    content.appendChild(header);

    const nav = document.createElement('ul');
    nav.classList.add('nav');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');

    homeLink.setAttribute('id', 'home');
    menuLink.setAttribute('id', 'menu');
    contactLink.setAttribute('id', 'contact');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    homeTab.appendChild(homeLink);
    menuTab.appendChild(menuLink);
    contactTab.appendChild(contactLink);
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    content.appendChild(nav);
}

export default createHeader