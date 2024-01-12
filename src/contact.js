export default function (container) {
  class Person {
    constructor(name, title, descrip) {
      this.name = name;
      this.title = title;
      this.descrip = descrip;
    }
  };

  const chef = new Person(
    'Alex Moris', 
    'Head Chef', 
    'Head chef specializing in italian dishes which he learned during his apprenticeship in Rome.'
  );

  const manager = new Person(
    'Emmy Landorf', 
    'Manager', 
    '10 years of experience managing food service business. Ready to deliver the best customer service.'
  );

  const employees = [chef, manager];

  employees.forEach((person) => {
    const h1 = document.createElement('h1');
    h1.textContent = person.name;
    container.appendChild(h1);

    const title = document.createElement('h3');
    title.textContent = person.title;
    container.appendChild(title);

    const descrip = document.createElement('p');
    descrip.textContent = person.descrip;
    container.appendChild(descrip);
  });
}