const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country + .error');
const form = document.querySelector('form');
const MAX_COUNTRY_LENGTH = 56;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', () => {
    displayError(email, emailError, checkEmailValidityOnLoad(), 'email address');
    displayError(country, countryError, checkCountryValidityOnLoad(), 'country');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayError(email, emailError, checkEmailValidity(), 'email address');
    displayError(country, countryError, checkCountryValidity(), 'country');
});

function checkEmailValidityOnLoad() {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    return isValid;
}

email.addEventListener('focusout', () => {
    displayError(email, emailError, checkEmailValidity(), 'email address');
});

country.addEventListener('focusout', () => {
    displayError(country, countryError, checkCountryValidity(), 'country');
});

function checkEmailValidity() {
        const isValid = email.value.length !== 0 && emailRegExp.test(email.value);
        return isValid;
}

function checkCountryValidityOnLoad() {
        const isValid = country.value.length === 0 || country.value.length <= MAX_COUNTRY_LENGTH;
        return isValid;
}

function checkCountryValidity() {
    const isValid = country.value.length !== 0 && country.value.length <= MAX_COUNTRY_LENGTH;
    return isValid;
}

function displayError(inputField, inputFieldError, isValid, inputFieldErrorText) {
    if (!isValid) {
        inputField.className = 'invalid';
        inputFieldError.textContent = `Please enter a valid ${inputFieldErrorText}.`;
        inputFieldError.className = 'error active';
    }
    else {
        inputField.className = 'valid';
        inputFieldError.textContent = '';
        inputFieldError.className = 'error';
    }
}
