// local reviews data - array of objects, each one a person
//typically would pull data through AJAX request - hard coding since don't know that process yet
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting review 
let currentReview = 0; //pulling index 0

/*load initial review data when page loads - REFACTOR TO LET FUNCTION DO THIS WORK
window.addEventListener("DOMContentLoaded", function() {
  //console.log("shake and bake"); //will show in console once page has loaded.
  const review = reviews[currentReview]; //set up a variable to be able to pull properties on
  img.src = review.img; //variable img comes from review object 0 img property
  author.innerText = review.name; //variable author content comes from object 0 name property
  job.innerText = review.job; //variable job content comes from object 0 job property
  info.innerText = review.text; //variable info content comes from object 0 text property
}); */

window.addEventListener("DOMContentLoaded", function() {
  //console.log("shake and bake"); //will show in console once page has loaded.
  showPerson(currentReview);
}); 

function showPerson(person) {
  const review = reviews[person]; //set up a variable to be able to pull properties on
  img.src = review.img; //variable img comes from review object 0 img property
  author.innerText = review.name; //variable author content comes from object 0 name property
  job.innerText = review.job; //variable job content comes from object 0 job property
  info.innerText = review.text; //variable info content comes from object 0 text property
}

//show next person
nextBtn.addEventListener("click", function() {
  currentReview++;
  if(currentReview > reviews.length -1) {
    currentReview = 0;
  }
  showPerson(currentReview);
});

//show prev person
prevBtn.addEventListener("click", function() {
  currentReview--;
  if(currentReview < 0) {
    currentReview = reviews.length -1;
  }
  showPerson(currentReview);
});

//show random person
randomBtn.addEventListener("click", function() {
  currentReview = getRandomNumber();
  //console.log(currentReview);
  showPerson(currentReview);
});

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}