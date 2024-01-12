import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';


const container = document.querySelector('div#content');

renderHome(container);
renderMenu(container);
renderContact(container);

