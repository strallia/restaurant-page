import Ramen from './ramen.png';
import Sandwich from './sandwich.png';
import Cake from './cake.png';
import IceCreams from './ice-creams.png';
import HotChocolate from './hot-chocolate.png';
import Milkshake from './milkshake.png';

export default function (container) {
  const details = [
    {
      title: 'Mains',
      items: [
        {
          name: 'Ramen',
          img: Ramen,
          descrip: 'Hand-pulled noodles, premium meats, and fresh veggies in a flavorful broth'
        },
        {
          name: 'Sandwich',
          img: Sandwich,
          descrip: 'Artisanal bread filled with high-quality meats, veggies, and gourmet spreads'
        }
      ], 
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Cake',
          img: Cake,
          descrip: 'Vanilla cake filled with boston cream topped with a chocolate glaze'
        },
        {
          name: 'Ice Cream',
          img: IceCreams,
          descrip: ' Locally-sourced ingredients to create our classic vanilla, strawberry, and chocolate flavors'
        }
      ], 
    },
    {
      title: 'Drinks',
      items: [
        {
          name: 'Hot Chocolate',
          img: HotChocolate,
          descrip: 'Rich cocoa with a swirl of whipped cream topped with marshmellows'
        },
        {
          name: 'Milkshake',
          img: Milkshake,
          descrip: 'Farm-fresh milk mixed with ice cream and a velvety blend of fresh strawberries'
        }
      ], 
    }
  ];

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  details.forEach((category) => {
    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-div');

    const h1 = document.createElement('h1');
    h1.textContent = category.title;
    borderDiv.appendChild(h1);

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-div');
    category.items.forEach((dish) => {
      itemsDiv.appendChild(generateDish(dish));
      borderDiv.appendChild(itemsDiv);
    });

    menuDiv.appendChild(borderDiv);
  })

  function generateDish(dish) {
    const dishDiv = document.createElement('div');
    dishDiv.classList.add('dish-div');

    const img = document.createElement('img');
    img.src = dish.img;
    
    const textDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = dish.name;
    textDiv.appendChild(h3);

    const para = document.createElement('p');
    para.textContent = dish.descrip;
    textDiv.appendChild(para);

    dishDiv.appendChild(img);
    dishDiv.appendChild(textDiv);

    return dishDiv;
  }

  container.appendChild(menuDiv);
}