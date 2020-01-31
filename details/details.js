import friendArray from '../data/data.js';
import { getUser, setUser } from '../data/storage.js';
import { updateUserText, friendMatch } from '../common/utils.js';

const pageTitle = document.getElementById('page-title');
const friendNameText = document.getElementById('friend-name-text');
const friendDescText = document.getElementById('friend-description-text');
const friendChoiceForm = document.getElementById('friend-choice-form');

const user = getUser();
const friends = friendArray;
let currentFriend;

const searchParams = new URLSearchParams(window.location.search);
const friendId = searchParams.get('id');

updateUserText(user);
currentFriend = friendMatch(friends, friendId);
const friendChoiceArray = Object.values(currentFriend.choices);

pageTitle.textContent = `Facestagrammer: ${currentFriend.name}`;
friendNameText.textContent = currentFriend.name;
friendDescText.textContent = currentFriend.description;

generateChoices(friendChoiceArray, friendChoiceForm);

const choicesSubmitButton = document.createElement('input');
choicesSubmitButton.type = 'submit';
friendChoiceForm.appendChild(choicesSubmitButton);


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

choicesSubmitButton.addEventListener('click', (e) => {

    e.preventDefault();

    const choiceFormResults = new FormData(friendChoiceForm);
    const userChoiceId = (choiceFormResults.get('choices'));
    const userChoice = currentFriend.choices[userChoiceId];
    
    friendChoiceForm.style.display = 'none';
    friendDescText.textContent = userChoice.result;
    user.health += userChoice.health;
    user.money += userChoice.money;
    user.completed[friendId] = true;
    setUser(user);
    setTimeout(() => window.location.assign('../list'), 3000);
});