import createHeader from './header';

function createContactPage(){
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    createHeader();

    const schedule = document.createElement('p');
    schedule.textContent = 'L - V 8:00 am - 18:00 pm';
    content.appendChild(schedule);
    const address = document.createElement('p');
    address.textContent = 'Back street 130';
    content.appendChild(address);
    const phone = document.createElement('p');
    phone.textContent = '123-123-234-345';
    content.appendChild(phone);

}

export default createContactPage