const button = document.getElementById('toggleButton');
const icon = document.getElementById('buttonIcon');
let isFirstIcon = true;

button.addEventListener('click', () => {
    if (isFirstIcon) {
        icon.src = 'static/arrow-down-left-circle-fill.svg';
    } else {
        icon.src = 'static/arrow-down-left-circle.svg';
    }
    isFirstIcon = !isFirstIcon;
});