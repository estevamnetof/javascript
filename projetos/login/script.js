const eyes = document.querySelector('#verSenha');
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

const eyesConfirm = document.querySelector('#verConfirmSenha');
let senhaConfirm = document.querySelector('#confirmSenha');
let labelSenhaConfirm = document.querySelector('#labelConfirmSenha');

const msgError = document.querySelector('#msgError');
const msgSucess = document.querySelector('#msgSucess');

// Funções
function viewPassword(password) {
    if (password.type === 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password');
    }
}

function inputCorrect(item, label, campo) {
    label.innerHTML = campo;
    label.style.color = 'green';
    item.style.borderBottom = '2px solid green';
}

// Verificação de caracteres
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 8) {
        labelSenha.innerHTML = 'Senha * Sua senha deve conter pelo menos 8 caracteres';
        labelSenha.style.color = 'red';
        senha.style.borderBottom = '2px solid red';
    } else {
        inputCorrect(senha, labelSenha, 'Senha');
    }
});

// Senhas conferem
senhaConfirm.addEventListener('keyup', () => {
    if (senha.value != senhaConfirm.value) {
        labelSenhaConfirm.innerHTML = 'As senhas não conferem';
        labelSenhaConfirm.style.color = 'red';
        senhaConfirm.style.borderBottom = '2px solid red';
    } else {
        inputCorrect(senhaConfirm, labelSenhaConfirm, 'Confirmar Senha');
    }
});

// Visualização da senha
eyes.addEventListener('click', () => {
    viewPassword(senha);
});

eyesConfirm.addEventListener('click', () => {
    viewPassword(senhaConfirm);
});

function cadastrar() {
    msgError.style.display = 'block';
    msgError.innerHTML = 'testando';
}