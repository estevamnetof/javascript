// const form = document.getElementById("contato");

// function handleKeyUp(event) {
//     console.log(event.target.value);
// }

// form.addEventListener('keyup', handleKeyUp);

// const form = document.getElementById('contato');

// function handleChange(event) {
//     const target = event.target;
//     if(!target.checkvalidity()) {
//         target.classList.add('invalido');
//         target.nextElementSibling.innerText = target.validationMessage;
//     } else {
//         target.classList.remove('invalido');
//     }
// }

// form.addEventListener('change', handleChange);


// const form = document.getElementById('contato');

// function handleChange(event) {
//     console.log(event.target.value);
//     document.body.style.backgroundColor = event.target.value;
// }

// form.addEventListener('change', handleChange);

const form = document.getElementById('contato');
const dados = {};

function handleChange(event) {
    dados[event.target.name] = event.target.value;
}

form.addEventListener('change', handleChange);

console.log(dados);