// camelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo ligação...')
    }
}

const celular = new Celular('Asus', 5.5, 5000)
console.log(celular);

function criarNotebook(marcaNotebook, processador, ssd) {
    return {
        marcaNotebook,
        processador,
        ssd,
        ligar() {
            console.log('Ligando...')
        }
    }
}

function Notebook(marcaNotebook, processador, ssd) {
    this.marcaNotebook = marcaNotebook,
    this.processador = processador,
    this.ssd = ssd,
    this.ligar = function() {
        console.log('LIGANDO...')
    }
}

const notebook = new Notebook('Samsung', 'i5', 550)
console.log(notebook);


// const carro = {
//     marca: 'Marca',
//     preco: 0,
// }

// function Carro() {
//     this.marca = 'Marca';
//     this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = 5000;

// function Carro(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
//     console.log(this);
// }

// const honda = new Carro('Honda', 4000);
// const fiat = new Carro('Fiat', 3000);


// // Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.andar = () => {
//         console.log(nome + ' andou')
//     }
// }

// const Renato = new Pessoa('Renato', 32);
// const Joao = new Pessoa('João', 18);
// const Maria = new Pessoa('Maria', 12);


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const andre = new Pessoa('André', 28);

// console.log(andre.nome);
// console.log(andre.idade);


Pessoa.prototype.andar = () => {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = () => {
    return this.nome + ' nadou';
}

console.log(Pessoa.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

const lista = document.querySelectorAll('li')
const listaArray = Array.prototype.slice.call(lista);


const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const bruno = new Pessoas('Bruno', 'Pereira', 23);
const renato = new Pessoas('Renato', 'Texeira', 22);


// Liste os métodos acessador por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


const comida = 'Pizza';
const frase = 'A melhor comida';

// console.log(comida.length);
// console.log(frase.length);
// console.log(comida[0]);
// console.log(frase[0]);
// console.log(frase[frase.length - 1]);

const liquido = new String('Água');
const ano = new String('2018');


const frase1 = 'A melhor linguagem é '
const linguagem = 'Javascript';
const fraseCompleta = frase1.concat(linguagem, '!!')

// console.log(linguagem.charAt(0));
// console.log(linguagem.charAt(2));
// console.log(linguagem.charAt(linguagem.length - 1));

// console.log(fraseCompleta);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

// console.log(listaFrutas.includes(fruta));
// console.log(fruta.includes(listaFrutas));

// console.log(fruta.endsWith('nana'));
// console.log(fruta.startsWith('Ba'));
// console.log(fruta.startsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0, 3));
// console.log(transacao2.slice(0, 3));
// console.log(transacao3.slice(0, 3));

// console.log(transacao1.slice(12));
// console.log(transacao1.slice(-4));
// console.log(transacao1.slice(3, 6));

const linguagem1 = 'JavaScript';
console.log(linguagem1.substring(3, 5));

const instrumento = 'Guitarra';

// console.log(instrumento.indexOf('r'));
// console.log(instrumento.lastIndexOf('r'));
// console.log(instrumento.indexOf('ta'));


const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
});

// console.log(listaPrecos[0].padStart(10, '.'));
// console.log(listaPrecos[0].padEnd(10, '.'));


const frase2 = 'Ta';

// console.log(frase2.repeat(5));


// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');
const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.')


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

const valor = '  R$ 23.00  ';
console.log(valor.trim())

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    }, 
];

let recebimentoTotal = 0
let taxaTotal = 0

transacoes.forEach((transacao) => {
    const numeroLimpo = transacao.valor.replace('R$ ', '');
    if(transacao.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo
    } else if (transacao.descricao.slice(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span><li>
            </ul>`;
const htmlText1 = html.split('span');
const htmlNovo1 = htmlText1.join('a')

// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
console.log(frase3[frase3.length - 1]);

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '   taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let taxasTotal = 0;

transacoes2.forEach((item) => {
    item = item.toLowerCase().trim().slice(0, 4);

    if(item === 'taxa') {
        taxasTotal++
    }
});

console.log(taxasTotal);

const ano1 = 2022;
const preco2 = new Number(99);

const preco3 = 2.99;
console.log(preco3.toFixed());

const carro2 =  1000.455;
console.log(carro2.toFixed(2));

const preco4 = 1499.49;
console.log(preco4.toFixed());

const preco5 = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 31 + 1) + 32);

// Retorne um número aleatório
// entre 1050 e 2000
Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(',');
const numeroMaximo = Math.max(...arrayNumeros);
