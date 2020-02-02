import { userStore, checkForm } from '../common/utils.js';
import { setUser } from '../data/storage.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkForm(userForm);
    if (!checkForm(userForm)) {
        alert('Missing Login Info');
        return;
    }

    const newUser = userStore(userForm);
    setUser(newUser);
    window.location.assign('../list');
});