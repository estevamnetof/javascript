const eyes = document.querySelector('#verSenha');
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

const eyesConfirm = document.querySelector('#verConfirmSenha');
let senhaConfirm = document.querySelector('#confirmSenha');
let labelSenhaConfirm = document.querySelector('#labelConfirmSenha');

// Verificação de caracteres
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 8) {
        labelSenha.innerHTML = 'Senha * Sua senha deve conter pelo menos 8 caracteres'
        labelSenha.style.color = 'red'
        senha.style.borderBottom = '2px solid red'
    } else {
        labelSenha.innerHTML = 'Senha'
        labelSenha.style.color = 'green'
        senha.style.borderBottom = '2px solid green'
    }
});

// Senhas conferem
senhaConfirm.addEventListener('keyup', () => {
    if (senha.value != senhaConfirm.value) {
        labelSenhaConfirm.innerHTML = 'As senhas não conferem'
        labelSenhaConfirm.style.color = 'red'
        senhaConfirm.style.borderBottom = '2px solid red'
    } else {
        labelSenhaConfirm.innerHTML = 'Confirmar Senha'
        labelSenhaConfirm.style.color = 'green'
        senhaConfirm.style.borderBottom = '2px solid green'
    }
});

// Visualização da senha
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
});