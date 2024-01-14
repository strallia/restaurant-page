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

    const h2 = document.createElement('h2');
    h2.textContent = person.name;

    const para = document.createElement('p');
    para.textContent = person.title;

    const img = document.createElement('img');
    img.src = person.img;

    const arr = [h2, para, img];
    arr.forEach((item) => {
      borderDiv.appendChild(item);
    });

    contactDiv.appendChild(borderDiv);
  })

  container.appendChild(contactDiv);
}