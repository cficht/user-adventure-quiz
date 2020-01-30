import friendArray from '../data/data.js';
import { getUser } from '../data/storage.js';
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
    const choicesSubmitButton = document.createElement('input');
    choicesSubmitButton.type = 'submit';
    friendChoiceForm.appendChild(choicesSubmitButton);
}