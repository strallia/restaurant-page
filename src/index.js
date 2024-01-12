import renderHome from './home/home.js';
import renderMenu from './menu/menu.js';
import renderContact from './contact/contact.js';
import './styles.css';

const container = document.querySelector('div#content');

renderHome(container);
renderMenu(container);
renderContact(container);

