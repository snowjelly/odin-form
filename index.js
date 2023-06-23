const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const form = document.querySelector('form');

email.addEventListener('input', checkValidity);
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function checkValidity() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter in a valid email address');
    }
    else if (email.validity.valid) {
        email.setCustomValidity('');
    }
}
