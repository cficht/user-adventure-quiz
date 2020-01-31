import { getUser } from '../data/storage.js';
import { updateUserText } from '../common/utils.js';
import endings from '../data/endings.js';

const user = getUser();
updateUserText(user);
let theEnding;

const resultsDiv = document.getElementById('results-div');
const restartButton = document.getElementById('restart');

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

const resultsTitle = document.createElement('h2');
resultsTitle.textContent = theEnding.title;
const resultsDescription = document.createElement('p');
resultsDescription.textContent = theEnding.description;
resultsDiv.appendChild(resultsTitle);
resultsDiv.appendChild(resultsDescription);

restartButton.addEventListener('click', () => {
    window.location.assign('../home');
});