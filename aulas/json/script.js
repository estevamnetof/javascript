// const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo":"25min"}';
// const textoOBJ = JSON.parse(textoJSON);

// const enderecoOBJ = {
//     cidade: 'Rio de Janeiro',
//     rua: 'Ali perto',
//     pais: 'Brasil',
//     numero: 50,
// }

// const enderecoJSON = JSON.stringify(enderecoOBJ);

const configuracoes = {
    player: 'Google API',
    tempo: 25.5,
    aula: '2-1 JavaScript',
    vitalicio: true,
}

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
console.log(pegarConfiguracoes);