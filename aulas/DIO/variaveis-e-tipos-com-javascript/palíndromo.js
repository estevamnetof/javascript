
//solucao 1
function verificaPalindromo(string) {
    if(!string) return 'string inexistente';

    string.split('').reverse().join('') === string;
}

console.log(verificarPalindromo('ovo'))

// solução 2

function verificaPalindromo2(string) {
    if(!string) return 'string inexistente';

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}