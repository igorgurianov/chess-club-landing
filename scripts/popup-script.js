const regBtn = document.querySelectorAll('.registration')
const popup = document.querySelector('.popup')

function closePopup() {
    popup.classList.remove('popup_opened')
}

function openPopup() {
    popup.classList.add('popup_opened')
}

regBtn.forEach(element => {
    element.addEventListener('click', () => openPopup())
});

popup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup__container')) {
        closePopup()
    }
})



