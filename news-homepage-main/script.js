const menuButton = document.querySelector('[type="checkbox"]');

menuButton.addEventListener('click', () => {
    if (menuButton.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    };
});