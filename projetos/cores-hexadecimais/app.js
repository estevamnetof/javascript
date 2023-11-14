const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const hexaValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const valor = document.querySelector('.valor-hexa');

btn.addEventListener('click', changeHex);

function changeHex() {
    let hex = '#';
    
    for(let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexaValues.length);
        hex += hexaValues[index];
    }

    valor.textContent = hex;
    body.style.background = hex;
}