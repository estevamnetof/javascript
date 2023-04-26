const linkExterno = document.querySelector('a[href^="http"]');
const lista = document.querySelectorAll('li');

function clickNoLink(event) {
  event.preventDefault();
  console.log(this);
}

function handleKey(event) {
    if(event.key === 'v') {
        document.body.classList.toggle('vermelho');
    } else if (event.key === 'a') {
        document.body.classList.toggle('azul');
    }
}

function listaEvento(event) {
    console.log(event.currentTarget.innerText);
}

linkExterno.addEventListener('click', clickNoLink);
window.addEventListener('keydown', handleKey);

lista.forEach(item => {
    item.addEventListener('click', listaEvento);
});