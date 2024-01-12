import Icon from './icon.png';

export default function () {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const para = document.createElement('p');
  
  img.src = Icon;
  h1.textContent = 'Homepage';
  para.textContent = 'some random text';

  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(para);
  return div;
};