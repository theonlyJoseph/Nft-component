const darkModeButton = document.querySelector('.checkbox-label');
const cardContainer = document.querySelector('.card-container')

darkModeButton.addEventListener('click', () => {
    cardContainer.classList.toggle('card-container--dark');
})