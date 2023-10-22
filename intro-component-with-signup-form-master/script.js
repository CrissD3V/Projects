const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
const sendButton = document.querySelector('button');
const inputBoxes = document.querySelectorAll('.input');
const inputWithError = document.querySelectorAll('.input-error');

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let fails = false;

// Delete error state on clicked inputs.
inputBoxes.forEach((input) => {
    input.addEventListener('click', removeErrorState);
});

function removeErrorState(e) {
    e.target.classList.remove('error-border');
    e.target.style.background = 'none';

    fails = false;

    if (!fails) {
        form.style.height = '470px';
        e.target.style.color = '#3e3c49';
    };
};

// Detect errors on inputs before submit.
form.addEventListener('submit', validateForm);

// Remove error message when click input.
form.addEventListener('click', function(e) {
    if (e.target.nodeName === 'INPUT') {
        e.target.nextElementSibling.remove();
    };

    fails = false;
});

function validateForm(e) {
    e.preventDefault();

    inputBoxes.forEach((input) => {
        if (input.nextSibling.nodeName === 'P') {
            input.nextElementSibling.remove();
        };
    });
    
    if (firstName.value.length === 0) {
        generateErrorAlertOn(firstName, 'First Name cannot be empty');
    };

    if (lastName.value.length === 0) {
        generateErrorAlertOn(lastName, 'Last Name cannot be empty');
    };

    if (!validEmail.test(email.value)) {
        generateErrorAlertOn(email, 'Looks like this is not an email');
    };

    if (password.value.length === 0) {
        generateErrorAlertOn(password, 'Password cannot be empty');

    } else if(password.value.length < 4) {
        generateErrorAlertOn(password, 'The password must contain at least 4 characters');
    };

    // Resize form container to prevent errors of design.
    if (fails) {
        form.style.height = '550px';
    };
}

function generateErrorAlertOn(field, message = 'Error') {
    let errorAlert = document.createElement('p');
        errorAlert.classList.add('error');
        errorAlert.textContent = message;
        fails = true;

        inputWithError.forEach((bigContainer) => {
            let inputContainer = bigContainer.children;
        
            for (let input of inputContainer) {
                if (input === field) {
                    input.after(errorAlert);
                };
            };
        });

        //Error style for input box.
        field.classList.add('error-border');
        field.style.background = 'url(./images/icon-error.svg) no-repeat right 12px';
        field.style.backgroundPosition = '430px';
        field.style.color = '#ff7a7a';
}