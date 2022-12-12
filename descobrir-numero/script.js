var numberToFind = 0;
var attempts = 0;

function refresh(){
    attempts = 0; 
    numberToFind = parseInt(Math.random() * 100);

    // console.log('The number to find: '+numberToFind);
}

refresh();

function verifyNumber(){
    var element = document.getElementById('bet');
    var bet = element.value;

    if(bet > 100 || bet < 0) {
        alert('Aposta é inválida');
        return;
    }

    if(bet > numberToFind) {
        attempts++;
        alert('O número a ser encontrado é MENOR');
    } else if(bet < numberToFind) {
        attempts++
        alert('O número a ser encontrado é MAIOR');
    } else {
        alert(`PARABÉNS! Você acertou!! com ${attempts} erros.`)
        refresh();
    }
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        verifyNumber();
    }
});