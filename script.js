//import json from './pets.json' assert {type: 'json'};
//console.log(json);

/*--------------------------------------slider start*/
let currentIndex = 0;
const cards = document.querySelectorAll(".pets__slider-card");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

function showCards() {
  for (let i = 0; i < cards.length; i++) {
    if (i >= currentIndex && i < currentIndex + 3) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function showNext() {
  if (currentIndex + 3 < cards.length) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  showCards();
}

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = cards.length - 3;
  }
  showCards();
}

leftButton.addEventListener("click", showPrevious);
rightButton.addEventListener("click", showNext);

showCards();

/*---------------------------------------slider end */

//import json from './pets.json' assert {type: 'json'};


document.addEventListener("DOMContentLoaded", function () {
  const learnMoreButtons = document.querySelectorAll(".pets__slider-card-button button");
  const popup = document.getElementById("popup");
  const popupImage = document.querySelector(".popup__container__img img");
  const popupText = document.querySelector(".popup__container__text");

  function loadJSON(callback) {
    fetch("./pets.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        callback(data);
      });
  }

  function updatePopupContent(pet) {
    popupImage.src = pet.img;
    popupText.innerHTML = `
      <button class="popup__close" onclick="popup.style.display = 'none'">&times;</button>
      <h2 class="popup__container__text__name">${pet.name}</h2>
      <h3 class="popup__container__text__type-breed">${pet.type} - ${pet.breed}</h3>
      <p class="popup__container__text__description">${pet.description}</p>
      <ul class="popup__container__text__ul">
        <li><span class="popup__span-bold">Age:</span> <span class="popup__pet-age char">${pet.age}</span></li>
        <li><span class="popup__span-bold">Inoculations:</span> <span class="popup__pet-inoculations char">${pet.inoculations.join(", ")}</span></li>
        <li><span class="popup__span-bold">Diseases:</span> <span class="popup__pet-diseases char">${pet.diseases.join(", ")}</span></li>
        <li><span class="popup__span-bold">Parasites:</span> <span class="popup__pet-parasites char">${pet.parasites.join(", ")}</span></li>
      </ul>
    `;
  }

  function processData(data) {
    let pets = data;
    for (let i = 0; i < learnMoreButtons.length; i++) {
      (function (index) {
        learnMoreButtons[index].addEventListener("click", function () {
          popup.style.display = "flex";
          updatePopupContent(pets[index]);
        });
      })(i);
    }
  }

  loadJSON(processData);
});




















console.log(123);
