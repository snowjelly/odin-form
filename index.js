const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country + .error');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + .error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + .error');
const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + .error');
const form = document.querySelector('form');
const MAX_COUNTRY_LENGTH = 56;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const zipRegExp = /^\d{5}([ \-]\d{4})?/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+=[\]{}|\\,.?<>'"/;`: -])[A-Za-z\d~!@#$%^&*()_+=[\]{}|\\,.?<>'"/;`: -]{8,}$/;
const passwordErrorText = 'password. Your password must include 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character';

window.addEventListener('load', () => {
    displayError(email, emailError, checkEmailValidityOnLoad(), 'email address');
    displayError(country, countryError, checkCountryValidityOnLoad(), 'country');
    displayError(zip, zipError, checkZipValidityOnLoad(), 'zip code');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayError(email, emailError, checkEmailValidity(), 'email address');
    displayError(country, countryError, checkCountryValidity(), 'country');
    displayError(zip, zipError, checkZipValidity(), 'zip code');
    displayError(password, passwordError, checkPasswordValidity(), passwordErrorText);
    displayError(confirmPassword, confirmPasswordError, checkConfirmPasswordValidity(), '');

    if (!checkConfirmPasswordValidity()) {
        confirmPasswordError.textContent = 'Your passwords do not match.';
        confirmPassword.setCustomValidity(confirmPasswordError.textContent);
    } else {
        confirmPassword.setCustomValidity('');
    }

    if (getFormValidity()) {
        alert('Form submitted!');
    }

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

zip.addEventListener('focusout', () => {
    displayError(zip, zipError, checkZipValidity(), 'zip code');
});

password.addEventListener('focusout', () => {
    displayError(password, passwordError, checkPasswordValidity(), passwordErrorText);
});

confirmPassword.addEventListener('focusout', () => {
    displayError(confirmPassword, confirmPasswordError, checkConfirmPasswordValidity(), '');
    if (!checkConfirmPasswordValidity()) {
        confirmPasswordError.textContent = 'Your passwords do not match.'; 
        confirmPassword.setCustomValidity(confirmPasswordError.textContent);
    } else {
        confirmPassword.setCustomValidity('');
    }
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

function checkZipValidity() {
    const isValid = zip.value.length !== 0 && zipRegExp.test(zip.value);
    return isValid;
}

function checkZipValidityOnLoad() {
    const isValid = zip.value.length === 0 || zipRegExp.test(zip.value);
    return isValid;
}

function checkPasswordValidity() {
    const isValid = password.value.length !== 0 && passwordRegExp.test(password.value);
    return isValid;
}

function checkConfirmPasswordValidity() {
    const isValid = confirmPassword.value.length !== 0 && password.value === confirmPassword.value;
    return isValid;
}

function getFormValidity() {
    const formItems = document.querySelectorAll('input.invalid');
    if (formItems.length === 0) return true;
}

function displayError(inputField, inputFieldError, isValid, inputFieldErrorText) {
    if (!isValid) {
        inputField.className = 'invalid';
        inputFieldError.textContent = `Please enter a valid ${inputFieldErrorText}.`;
        inputFieldError.className = 'error active';
        inputField.setCustomValidity(inputFieldError.textContent);
    }
    else {
        inputField.className = 'valid';
        inputFieldError.textContent = '';
        inputFieldError.className = 'error';
        inputField.setCustomValidity('');
    }
    return inputFieldError;
}
