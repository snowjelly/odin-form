const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const form = document.querySelector('form');

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = 'valid';
        emailError.textContent = '';
        emailError.className = 'error';
    }
    else {
        email.className = 'invalid';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmailValidity();
});



function checkEmailValidity() {
        const isValid = email.value.length === 0 || emailRegExp.test(email.value);
        if (!isValid) {
            email.className = 'invalid';
            emailError.textContent = 'Please enter a valid email';
            emailError.className = 'error active';
        }
        else {
            email.className = 'valid';
            emailError.textContent = '';
            emailError.className = 'error';
        }
}