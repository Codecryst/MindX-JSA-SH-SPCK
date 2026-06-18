let rememberMeChecked = false;

if (document.cookie.includes('logsign_account=true')) {
    window.location.href = './index.html';
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
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    document.cookie = 'email=; path=/; max-age=0';
    document.cookie = 'password=; path=/; max-age=0';
    document.cookie = `email=${email}; path=/; max-age=31536000`;
    document.cookie = `password=${password}; path=/; max-age=31536000`;
}

function NoRememberMe() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    document.cookie = 'email=; path=/; max-age=0';
    document.cookie = 'password=; path=/; max-age=0';
    document.cookie = `email=${email}; path=/`;
    document.cookie = `password=${password}; path=/`;
}

function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    const accounts = getAccounts();
    const user = accounts.find(account => account.email === email);

    if (!user) {
        alert('Account not found. Please sign up first.');
        return;
    }

    if (user.password !== password) {
        alert('Incorrect password.');
        return;
    }

    if (rememberMeChecked) {
        RememberMe();
    } else {
        NoRememberMe();
    }

    document.cookie = `logsign_account=true; path=/; max-age=31536000`;
    alert('Access granted');
    window.location.href = './index.html';
}