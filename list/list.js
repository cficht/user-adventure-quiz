import friendArray from '../data/data.js';
import { getUser, setUser } from '../data/storage.js';
import { updateUserText } from '../common/utils.js';

const pageTitle = document.getElementById('page-title');
const friendList = document.getElementById('online-list');
const friendListOffline = document.getElementById('offline-list');
const mainDiv = document.getElementById('main-div');

// get user data from local storage and update DOM using it
const user = getUser();
updateUserText(user);
pageTitle.textContent = `Facestagrammer: ${user.name}`;

// get friend data and set initial state of scenarios completed
const friends = friendArray;
let friendCompleteCount = 0;

// loop through friend list and populate on DOM
friends.forEach((friend) => {
    const friendLi = document.createElement('li');
    const friendURL = document.createElement('a');
    friendURL.href = `../details/?id=${friend.id}`;
    friendURL.textContent = friend.name;
    friendURL.style.color = 'green';
    friendLi.appendChild(friendURL);

    // check if friend scenario has been completed
    const friendComplete = user.completed[friend.id];
    
    // if complete: disable link, turn red and move to offline list
    if (friendComplete) {
        friendURL.classList.add('disabled');
        friendURL.style.color = 'red';
        friendCompleteCount++;
        friendListOffline.appendChild(friendLi);
    } else {
        // if not complete, move to online list
        friendList.appendChild(friendLi);
    }

    // disable friend links if friend count is at 0
    if (user.health <= 0 && !friendComplete) {
        friendURL.classList.add('disabled');
    }
});

// update user data in local storage
setUser(user);

// if all scenarios have been completed or friend count is at 0 or less
if (friendCompleteCount === 4 || user.health <= 0) {

    // update DOM
    const mainInfoDiv = document.createElement('div');
    mainInfoDiv.id = 'main-info-div';
    mainDiv.appendChild(mainInfoDiv);
    const incomingMessage = document.createElement('p');
    incomingMessage.textContent = 'Incoming Message...';
    mainInfoDiv.appendChild(incomingMessage);

    // wait 3 seconds and go to results page
    setTimeout(() => {window.location.assign('../results');}, 3000);
}