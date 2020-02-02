export function userStore(userForm) {
    const formToObject = new FormData(userForm);

    const userObject = {
        name: formToObject.get('name'),
        birthday: formToObject.get('birthday'),
        health: 100,
        money: 100,
        completed: {
            willy: false,
            highschool: false,
            ex: false,
            boss: false
        }
    };
    return userObject;
}

export function updateUserText(user) {
    const userNameText = document.getElementById('user-name');
    const userBdayText = document.getElementById('user-bday');
    const userBdayImage = document.getElementById('user-bday-image');
    const userFriendsText = document.getElementById('user-friends');
    const userLikesText = document.getElementById('user-likes');

    const userSignText = astrologicalSign(user);

    userNameText.textContent = `${user.name}`;
    userBdayText.textContent = `${userSignText} `;
    userBdayImage.src = `../assets/${userSignText}.png`;
    userFriendsText.textContent = `${user.health}`;
    userLikesText.textContent = `${user.money}`;
}

function astrologicalSign(user) {
    const utcDate = new Date(user.birthday);
    const utcMonth = utcDate.getMonth();
    const utcDay = utcDate.getDate();
    let astSign;

    if ((utcMonth === 2 && utcDay >= 20) || (utcMonth === 3 && utcDay <= 19)) {
        astSign = 'Aries';
    }
    else if ((utcMonth === 3 && utcDay >= 20) || (utcMonth === 4 && utcDay <= 20)) {
        astSign = 'Taurus';
    }
    else if ((utcMonth === 4 && utcDay >= 22) || (utcMonth === 5 && utcDay <= 20)) {
        astSign = 'Gemini';
    }
    else if ((utcMonth === 5 && utcDay >= 21) || (utcMonth === 6 && utcDay <= 21)) {
        astSign = 'Cancer';
    }
    else if ((utcMonth === 6 && utcDay >= 22) || (utcMonth === 7 && utcDay <= 21)) {
        astSign = 'Leo';
    }
    else if ((utcMonth === 7 && utcDay >= 22) || (utcMonth === 8 && utcDay <= 22)) {
        astSign = 'Virgo';
    }
    else if ((utcMonth === 8 && utcDay >= 23) || (utcMonth === 9 && utcDay <= 22)) {
        astSign = 'Libra';
    }
    else if ((utcMonth === 9 && utcDay >= 23) || (utcMonth === 10 && utcDay <= 21)) {
        astSign = 'Scorpio';
    }
    else if ((utcMonth === 10 && utcDay >= 22) || (utcMonth === 11 && utcDay <= 20)) {
        astSign = 'Sagittarius';
    }
    else if ((utcMonth === 11 && utcDay >= 21) || (utcMonth === 0 && utcDay <= 19)) {
        astSign = 'Capricorn';
    }
    else if ((utcMonth === 0 && utcDay >= 20) || (utcMonth === 1 && utcDay <= 18)) {
        astSign = 'Aquarius';
    }
    else {
        astSign = 'Pisces';
    }

    return astSign;
}

export function friendMatch(friends, friendId) {
    let currentFriend;
    friends.forEach((friend) => {
        if (friend.id === friendId) {
            currentFriend = friend;
        }
    });
    if (!currentFriend) {
        window.location.assign('../list');
        return;
    }
    return currentFriend;
}

export function checkForm(form) {
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '' && inputs[i].type !== 'submit'){    
            return false;
        }
    }
    return true;
}
