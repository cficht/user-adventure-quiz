import friendArray from '../data/data.js';
import { getUser, setUser } from '../data/storage.js';
import { updateUserText, friendMatch, changeUserTextColor } from '../common/utils.js';

const pageTitle = document.getElementById('page-title');
const friendNameText = document.getElementById('friend-name-text');
const friendImage = document.getElementById('friend-image');
const friendDescText = document.getElementById('friend-description-text');
const friendChoiceForm = document.getElementById('friend-choice-form');
const friendChoiceDiv = document.getElementById('friend-choice-div');

let listLink = document.createElement('button');
listLink.textContent = 'Back to Profile Page';

// get and set initial state
const user = getUser();
updateUserText(user);
const friends = friendArray;
let currentFriend;

// get friend ID from query params
const searchParams = new URLSearchParams(window.location.search);
const friendId = searchParams.get('id');
// match friend in query param to friend in metadata
currentFriend = friendMatch(friends, friendId);
// check if friend scenario has already been completed and redirect to list if so
const friendComplete = user.completed[currentFriend.id];
if (friendComplete) window.location.assign('../list');

// update DOM to reflect current friend
pageTitle.textContent = `Facestagrammer: ${currentFriend.name}`;
friendNameText.textContent = currentFriend.name;
friendImage.src = `../assets/${currentFriend.detailimage}`;
friendDescText.textContent = currentFriend.description;

// create choices form and update DOM
const friendChoiceArray = Object.values(currentFriend.choices);
generateChoices(friendChoiceArray, friendChoiceForm);
const choicesSubmitButton = document.createElement('input');
choicesSubmitButton.type = 'submit';
choicesSubmitButton.id = 'choice-submit';
friendChoiceForm.appendChild(choicesSubmitButton);

// loop through choices using metadata and create dom for each one
function generateChoices(friendChoiceArray, friendChoiceForm) {
    friendChoiceArray.forEach((choice) => {
        const choiceLabel = document.createElement('label');
        choiceLabel.textContent = choice.description;
        choiceLabel.classList.add('choice-label');
        const choiceButton = document.createElement('input');
        choiceButton.type = 'radio';
        choiceButton.name = 'choices';
        choiceButton.value = choice.id;
        choiceLabel.appendChild(choiceButton);
        friendChoiceForm.appendChild(choiceLabel);
    });    
}

// update state and DOM based on user's choice
friendChoiceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get choice from form and match it with metadata
    const choiceFormResults = new FormData(friendChoiceForm);
    const userChoiceId = (choiceFormResults.get('choices'));
    const userChoice = currentFriend.choices[userChoiceId];
    
    // use metadata to update user object's state and DOM
    friendChoiceForm.style.display = 'none';
    friendImage.src = `../assets/${userChoice.resultimage}`;
    friendDescText.textContent = userChoice.result;
    user.health += userChoice.health;
    // don't let friend count get below 0
    if (user.health <= 0) user.health = 0;
    user.money += userChoice.money;
    user.completed[friendId] = true;

    // don't let friend count get below 0
    if (user.health <= 0) user.health = 0;

    // update user's state in DOM and local storage
    changeUserTextColor(user);
    updateUserText(user);
    setUser(user);

    // add return link
    friendChoiceDiv.appendChild(listLink);
});

// send user back to the list page on click
listLink.addEventListener('click', () => {
    window.location.assign('../list');
});