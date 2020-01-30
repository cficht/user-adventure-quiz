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