export function getUser() {
    // get user from local storage
    const userJSON = localStorage.getItem('user');  

    // if user doesn't exist, go to login page
    if (!userJSON) {
        window.location.assign('../home');
    }
    
    const userData = JSON.parse(userJSON);
    return userData;
}

export function setUser(userData) {
    // set user in local storage
    const userJSON = JSON.stringify(userData);
    localStorage.setItem('user', userJSON);
}