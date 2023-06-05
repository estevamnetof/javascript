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

const Input = {
    correct(item, label, campo) {
        label.innerHTML = campo;
        label.style.color = 'green';
        item.style.borderBottom = '2px solid green';
    },
    incorrect(item, label) {
        label.style.color = 'red';
        item.style.borderBottom = '2px solid red';
    }
}

// Verificação de caracteres
senha.oninput = () => {
    if (senha.value.length <= 8) {
        labelSenha.innerHTML = 'Senha * Sua senha deve conter pelo menos 8 caracteres';
        Input.incorrect(senha, labelSenha);
    } else {
        Input.correct(senha, labelSenha, 'Senha');
    }
}

// Senhas conferem
senhaConfirm.oninput = () => {
    if (senha.value != senhaConfirm.value) {
        labelSenhaConfirm.innerHTML = 'As senhas não conferem';
        Input.incorrect(senhaConfirm, labelSenhaConfirm);
    } else {
        Input.correct(senhaConfirm, labelSenhaConfirm, 'Confirmar Senha');
    }
}

// Visualização da senha
eyes.addEventListener('click', () => {
    viewPassword(senha);
});

eyesConfirm.addEventListener('click', () => {
    viewPassword(senhaConfirm);
});

// function cadastrar() {
//     msgError.style.display = 'block';
//     msgError.innerHTML = 'testando';
// }