import { userStore } from '../common/utils.js';
import { setUser } from '../data/storage.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUser = userStore(userForm);
    setUser(newUser);
    window.location.assign('../list');
});