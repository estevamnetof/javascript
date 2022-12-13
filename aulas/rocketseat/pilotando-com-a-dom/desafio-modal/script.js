const openModal = document.querySelector('#openModal');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
    modal.classList.remove('invisible');
});

document.addEventListener('keydown', (event) => {
    if(modal.classList.contains !== 'invisible') {
        const isEscKey = event.key === 'Escape';
        if(isEscKey) {
            modal.classList.add('invisible');
        }
    }
});