import Icon from './icon.png';

export default function (container) {
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const para = document.createElement('p');
  
  img.src = Icon;
  img.classList.add('img');
  h1.textContent = 'Home';
  para.textContent = 'some random text';

  container.appendChild(img);
  container.appendChild(h1);
  container.appendChild(para);
};