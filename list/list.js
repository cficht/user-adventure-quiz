import friendArray from '../data/data.js';
import { getUser } from '../data/storage.js';
import { updateUserText } from '../common/utils.js';

const friendList = document.getElementById('friend-list');
const pageTitle = document.getElementById('page-title');

const user = getUser();
const friends = friendArray;

updateUserText(user);

pageTitle.textContent = `Facestagrammer: ${user.name}`;

friends.forEach((friend) => {
    const friendLi = document.createElement('li');
    const friendURL = document.createElement('a');
    friendURL.href = `../details/?id=${friend.id}`;
    friendURL.textContent = friend.name;
    friendLi.appendChild(friendURL);
    friendList.appendChild(friendLi);
});
