const inputCep = document.querySelector('#input-cep');
const btnCep = document.querySelector('.searchCep');

function buscarCep() {
    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(response => response.json())
    .then(cep => {
        if (cep.erro == true) {
            Modal.message.innerHTML = 'CEP inválido'
        } else {
            Modal.message.innerHTML +=  cep.logradouro + '<br>'
            Modal.message.innerHTML += 'Complemento: ' + cep.complemento + '<br>'
            Modal.message.innerHTML += 'Bairro: ' + cep.bairro + '<br>'
            Modal.message.innerHTML += 'Cidade: ' + cep.localidade + '<br>'
            Modal.message.innerHTML += 'DDD: ' + cep.ddd
        }
        
    })
}

const isValidCep = () => {
    const pattern = /^[0-9]{5}-[0-9]{3}$/;
    return pattern.test(inputCep.value);
}

const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open');
    },
    close() {
        AlertError.element.classList.remove('open');
    }
}

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .close'),

    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
    Modal.message.innerHTML = '';
}

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown({key}) {
    if (key === 'Escape') {
        Modal.close();
        Modal.message.innerHTML = '';
    }
}

function handleSearchResult(event) {
    event.preventDefault();

    if(!isValidCep()) {
        AlertError.open();
        return
    }

    AlertError.close();

    Modal.open();

    buscarCep();
}

btnCep.addEventListener('click', handleSearchResult);