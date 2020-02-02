import { getUser } from '../data/storage.js';
import { updateUserText } from '../common/utils.js';
import endings from '../data/endings.js';

const resultsDiv = document.getElementById('results-div');
const restartButton = document.getElementById('restart');

// get user data from local storage and update DOM using it
const user = getUser();
updateUserText(user);
let theEnding;

// choose ending from ending metadata using user state
if (user.health > 0 && user.money >= 40) {
    theEnding = endings.employer;
} else if (user.health > 0 && user.money >= 20 && user.money < 40) {
    theEnding = endings.attractive;
} else if (user.health > 0 && user.money < 20) {
    theEnding = endings.average;
} else if (user.health === 0 && user.money >= 40) {
    theEnding = endings.warned;
} else if (user.health === 0 && user.money >= 20 && user.money < 40) {
    theEnding = endings.banned;
} else if (user.health === 0 && user.money < 20) {
    theEnding = endings.fired;
}

// create dom using chosen ending's metadata
const resultsTitle = document.createElement('h2');
resultsTitle.textContent = theEnding.title;
const gameoverImage = document.createElement('img');
gameoverImage.src = `../assets/${theEnding.image}`;
gameoverImage.id = 'gameover-image';
const resultsDescription = document.createElement('p');
resultsDescription.textContent = theEnding.description;
resultsDiv.appendChild(resultsTitle);
resultsDiv.appendChild(gameoverImage);
resultsDiv.appendChild(resultsDescription);

// restart game
restartButton.addEventListener('click', () => {
    window.location.assign('../home');
});

