import renderHome from './home/home.js';
import renderMenu from './menu/menu.js';
import renderContact from './contact/contact.js';
import './styles.css';

const container = document.querySelector('div#content');

const tabs = document.querySelectorAll('nav > button');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    renderActiveTab(event.target)
    renderContent(event.target);
  });
})

function renderActiveTab(activeTab) {
  tabs.forEach((tab) => {
    tab.setAttribute('data-status', 'inactive');
  });
  activeTab.setAttribute('data-status', 'active');
}

function renderContent(activeTab) {
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

const homeTab = document.querySelector('button[data-value="home"]');
renderActiveTab(homeTab);
renderContent(homeTab);