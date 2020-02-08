import createMainPage from './mainpage';
import createHeader from './header';
import createContactPage from './contactpage';
import createMenuPage from './menupage';

function addListeners(){
    const homeLink = document.querySelector('#home');
    const menuLink = document.querySelector('#menu');
    const contactLink = document.querySelector('#contact');
    homeLink.addEventListener('click',e=>{
        createMainPage();
        addListeners();
    });
    menuLink.addEventListener('click',e=>{
        createMenuPage();
        addListeners();
    });
    contactLink.addEventListener('click',e=>{
        createContactPage();
        addListeners();
    });
}

createHeader();
addListeners();


