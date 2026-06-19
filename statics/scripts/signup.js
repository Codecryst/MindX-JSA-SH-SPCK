let rememberMeChecked = false;

if (document.cookie.includes('logsign_account=true')) {
    window.location.href = '/pages/';
}

function getAccounts() {
    const match = document.cookie.match(/(?:^|; )accounts=([^;]+)/);
    if (!match) return [];
    try {
        return JSON.parse(decodeURIComponent(match[1]));
    } catch (e) {
        return [];
    }
}

function saveAccounts(accounts) {
    document.cookie = `accounts=${encodeURIComponent(JSON.stringify(accounts))}; path=/; max-age=31536000`;
}

function RememberMe() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    document.cookie = 'email=; path=/; max-age=0';
    document.cookie = 'password=; path=/; max-age=0';
    document.cookie = `email=${email};path=/; max-age=31536000`;
    document.cookie = `password=${password};path=/; max-age=31536000`;
}

function NoRememberMe() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    document.cookie = 'email=; path=/; max-age=0';
    document.cookie = 'password=; path=/; max-age=0';
    document.cookie = `email=${email}; path=/;`;
    document.cookie = `password=${password}; path=/;`;
}

function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!email || !password) {
        console.log('submit called', email, password);
        alert('Please enter both email and password.');
        return;
    }

    const accounts = getAccounts();
    const exists = accounts.some(user => user.email === email);

    if (exists) {
        console.log('submit called', email, password);
        alert('This email already exists.');
        return;
    }

    accounts.push({ email, password });
    saveAccounts(accounts);

    if (rememberMeChecked) {
        RememberMe();
    } else {
        NoRememberMe();
    }

    document.cookie = `logsign_account=true; path=/; max-age=31536000`;
    window.location.href = '/pages/';
}