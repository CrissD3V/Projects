const ratingSection = document.querySelectorAll('.show');
const thankYouSection = document.querySelectorAll('.hide');
const rateButtons = document.querySelector('.rate-buttons');
const submitButton = document.querySelector('.submit-button');
const ratingMessage = document.querySelector('[data-id="user-rating"]');

let buttonClicked = false;
let totalRate;

rateButtons.addEventListener('click', function(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    };

    for (let rateButton of rateButtons.children) {
        if(rateButton.classList.contains('clicked')) {
            rateButton.classList.remove('clicked');
        }
    };
    
    e.target.classList.add('clicked');
    buttonClicked = true;
    totalRate = e.target.textContent;
});

submitButton.addEventListener('click', function() {
    if (!buttonClicked) {
        alert('¡Primero escoja una puntuación!');
    } else {
        hideSection(ratingSection);
        showSection(thankYouSection);

        ratingMessage.textContent = totalRate;
    };
});

function hideSection(section) {
    for (let elements of section) {
        elements.classList.remove('show');
        elements.classList.add('hide');
    };
};

function showSection(section) {
    for (elements of section) {
        elements.classList.remove('hide');
    };
};