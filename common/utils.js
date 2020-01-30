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
    const userFriendsText = document.getElementById('user-friends');
    const userLikesText = document.getElementById('user-likes');
    userNameText.textContent = `Name: ${user.name}`;
    userBdayText.textContent = `Birthday: ${user.birthday}`;
    userFriendsText.textContent = `Friends: ${user.health}`;
    userLikesText.textContent = `Likes: ${user.money}`;
}