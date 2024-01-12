import renderHome from './home/home.js';
import renderMenu from './menu/menu.js';
import renderContact from './contact/contact.js';
import './styles.css';

const container = document.querySelector('div#content');

const tabs = document.querySelectorAll('nav > button');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => renderContent(event.target));
})

function renderContent(activeTab) {
  // render active tab
  tabs.forEach((tab) => {
    tab.setAttribute('data-status', 'inactive');
  });
  activeTab.setAttribute('data-status', 'active');

  // render activeTab's content
  container.textContent = '';
  const tabValue = activeTab.getAttribute('data-value');
  switch(tabValue) {
    case 'home':
      renderHome(container);
      break;
    case 'menu':
      renderMenu(container);
      break;
    case 'contact':
      renderContact(container);
  }; 
}
