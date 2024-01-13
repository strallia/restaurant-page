import renderHome from './home/home.js';
import renderMenu from './menu/menu.js';
import renderContact from './contact/contact.js';
import './styles.css';

const container = document.querySelector('div#content');

const tabs = document.querySelectorAll('nav > button');
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    renderOpenTab(event.target)
    renderContent(event.target);
  });
})

function renderOpenTab(selectedTab) {
  tabs.forEach((tab) => {
    tab.setAttribute('data-status', 'closed');
  });
  selectedTab.setAttribute('data-status', 'open');
}

function renderContent(selectedTab) {
  container.textContent = '';
  const tabValue = selectedTab.getAttribute('data-value');
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
renderOpenTab(homeTab);
renderContent(homeTab);