export function getUser() {
    const userJSON = localStorage.getItem('user');
    
    if (!userJSON) {
        window.location.assign('../home');
    }

    const userData = JSON.parse(userJSON);
    return userData;
}

export function setUser(userData) {
    const userJSON = JSON.stringify(userData);
    localStorage.setItem('user', userJSON);
}