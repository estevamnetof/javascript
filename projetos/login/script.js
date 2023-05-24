const eyes = document.querySelector('#verSenha');
let senha = document.querySelector('#senha');

const eyesConfirm = document.querySelector('#verConfirmSenha');
let senhaConfirm = document.querySelector('#confirmSenha');

eyes.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }
});

eyesConfirm.addEventListener('click', () => {
    if (senhaConfirm.type === 'password') {
        senhaConfirm.setAttribute('type', 'text');
    } else {
        senhaConfirm.setAttribute('type', 'password');
    }
})