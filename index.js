const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const form = document.querySelector('form');

email.addEventListener('focusout', checkValidity);
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;