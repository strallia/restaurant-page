import Baker from './baker.png';
import Chef from './chef.png';
import Waiter from './waiter.png';

export default function (container) {
  class Person {
    constructor(name, title, img) {
      this.name = name;
      this.title = title;
      this.img = img;
    }
  };
  const chef = new Person(
    'Paws Culinaire', 
    'Head Chef', 
    Chef
  );
  const baker = new Person(
    'Whisker Kneads', 
    'Head Baker', 
    Baker
  );
  const waiter = new Person(
    'Meowster Tailington', 
    'Waiter', 
    Waiter
  );
  const employees = [chef, baker, waiter];

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');

  employees.forEach((person) => {
    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-div');

    const h1 = document.createElement('h1');
    h1.textContent = person.name;

    const h3 = document.createElement('h3');
    h3.textContent = person.title;

    const img = document.createElement('img');
    img.src = person.img;

    const arr = [h1, h3, img];
    arr.forEach((item) => {
      borderDiv.appendChild(item);
    });

    contactDiv.appendChild(borderDiv);
  })

  container.appendChild(contactDiv);
}