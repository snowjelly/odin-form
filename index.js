const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country + .error');
const form = document.querySelector('form');
const MAX_COUNTRY_LENGTH = 56;

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
    checkCountryValidity();
});

email.addEventListener('focusout', () => {
    checkEmailValidity() ;
});

country.addEventListener('focusout', () => {
    checkCountryValidity();
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


function checkCountryValidity() {
        const isValid = country.value.length === 0 || country.value.length <= MAX_COUNTRY_LENGTH;
        console.log(isValid);
        if (!isValid) {
            country.className = 'invalid';
            countryError.textContent = 'Please enter a valid country';
            countryError.className = 'error active';
        }
        else {
            country.className = 'valid';
            countryError.textContent = '';
            countryError.className = 'error';
        }
}