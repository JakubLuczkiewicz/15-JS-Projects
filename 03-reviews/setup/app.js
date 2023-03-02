// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
let reviewNumber = 0;
showObject(reviews[0]);

let buttonPrev = document.querySelector('.prev-btn')
let buttonNext = document.querySelector('.next-btn')
let buttonRandom = document.querySelector('.random-btn')

function showObject(object) {
  document.querySelector('.author').textContent = object.name
  document.querySelector('.job').textContent = object.job
  document.querySelector('#info').textContent = object.text
  document.querySelector('#person-img').src = object.img
  console.log(reviewNumber)
}

buttonPrev.addEventListener('click', function () {
  if (reviewNumber === 0) reviewNumber = reviews.length - 1;
  else reviewNumber--;
  showObject(reviews[reviewNumber]);
})

buttonNext.addEventListener('click', function () {
  reviewNumber = (reviewNumber + 1) % reviews.length;
  showObject(reviews[reviewNumber]);
})

buttonRandom.addEventListener('click', function () {
  let randomNumber = generateRandomNumber();
  while (randomNumber == reviewNumber && reviews.length > 1) randomNumber = generateRandomNumber();
  reviewNumber = randomNumber;
  showObject(reviews[reviewNumber]);
})

function generateRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}