import Pasta from './pasta.png';

export default function () {
  const div = document.querySelector('div#content');

  // Title
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  div.appendChild(h1);

  // Main Course
  const h3 = document.createElement('h3');
  h3.textContent = 'Main Course';
  div.appendChild(h3);

  // Food Item
  const itemDiv = document.createElement('div');
  const itemName = document.createElement('h5');
  const itemDescrip = document.createElement('p');
  const itemImg = document.createElement('img');
  itemName.textContent ='Tomato Pasta';
  itemDescrip.textContent = 'Aldente pasta with a bright tangy tomato sauce with italian flavors';
  itemImg.src = Pasta;
  itemDiv.appendChild(itemName);
  itemDiv.appendChild(itemDescrip);
  itemDiv.appendChild(itemImg);
  div.appendChild(itemDiv);
}