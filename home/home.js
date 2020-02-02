import { userStore, checkForm } from '../common/utils.js';
import { setUser } from '../data/storage.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // check if all fields are entered
    checkForm(userForm);
    if (!checkForm(userForm)) {
        alert('Missing Login Info');
        return;
    }

    // create new user from form data
    const newUser = userStore(userForm);
    // save new user in in local storage
    setUser(newUser);
    window.location.assign('../list');
});