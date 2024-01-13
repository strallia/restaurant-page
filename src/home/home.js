import Icon from './icon.png';

export default function (container) {
  // welcome section
  const welcomeDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const textDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const welcomePara = document.createElement('p');

  welcomeDiv.classList.add('welcome');
  img.src = Icon;
  h1.textContent = 'Welcome to Kitty Cafe!';
  welcomePara.textContent= "The ultimate destination for cat lovers and food enthusiasts. Our Kitty Cafe offers a purr-fect haven for relaxation and feline companionship.";

  imgDiv.appendChild(img);
  [h1, welcomePara].forEach((element) => textDiv.appendChild(element));
  [imgDiv, textDiv].forEach((element) => welcomeDiv.appendChild(element));


  // details section
  const bubbleDiv = document.createElement('div');
  const borderDiv = document.createElement('div');
  bubbleDiv.classList.add('bubble-section');

  const details = [
    {
      title: 'Open Hours',
      text: [
        "Monday - Friday : 10am - 6pm",
        "Saturday - Sunday : 10am - 8pm"
      ]
    },
    {
      title: 'Location',
      text: [
        "111 Sunshine Lane",
        "Neverland, CA"
      ]
    }
  ];
  details.forEach((section) => {
    const h2 = document.createElement('h2');
    h2.textContent = section.title;

    const listDiv = document.createElement('div');
    const textArr = section.text;
    textArr.forEach((string) => {
      const para = document.createElement('p');
      para.textContent = string;
      listDiv.appendChild(para);
    });

    [h2, listDiv].forEach((element) => borderDiv.appendChild(element));
  });
  bubbleDiv.appendChild(borderDiv);


  container.appendChild(welcomeDiv);
  container.appendChild(bubbleDiv);
};