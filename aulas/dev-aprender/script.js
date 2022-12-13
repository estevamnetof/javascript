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

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos2 = ['R$ 59,99', ' R$ 100,222', ' R$ 230  ', 'r$  200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
  }
  
  let soma = 0;
  listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
  })
  
  console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  
  limparPreco(listaPrecos[1]);

  const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
  const precos = [49, 99, 69, 89];

  const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome)}];



let li = document.querySelectorAll('li');
li = Array.from(li);

// const carros = {
//     0: 'Fiat',
//     1: 'Honda',
//     2: 'Ford',
//     length: 4,
// }

// const carrosArray = Array.from(carros);
// console.log(carrosArray);
// console.log(carrosArray.sort());

const idades = [32, 21, 33, 43, 1, 12, 8];
// console.log(idades);
// console.log(idades.sort());

// carrosArray.push('Ferrari');
// carrosArray.unshift('VW');

// console.log(carrosArray.shift());
// console.log(carrosArray.pop());

// console.log(carrosArray.reverse());

// carrosArray.splice(1, 0, 'Kia', 'Mustang');

const lista1 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);

const lista2 = ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');


const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes3 = transporte1.concat(transporte2);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(' ');



let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

// const carros2 = ['Ford', 'Fiat', 'Honda'];
// carros2.forEach((item, index, array) => {
//     console.log(item.toUpperCase);
// });

const li2 = document.querySelectorAll('li');

li2.forEach( i => i.classList.add('ativa'));

li2.forEach(function(item) {
    item.classList.add('ativa');
});

const carros2 = ['Ford', 'Fiat', 'Honda'];

// carros2.forEach((item, index, array) => {
//     array[index] = 'Carro ' + item;
// });

const newCarros = carros2.map((item) => {
    return 'Carro ' + item;
});


const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros2.map(n => n * 3);


const aulas = [ 
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);


const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
    return acumulador + atual;
});

const total2 = aulas1.reduce((acc, cur) => acc + cur, 100);

const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros3.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});


const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
const adcUltimoValor = comidas.push('Arroz');
const adcPrimeiroValor = comidas.unshift('Peixe');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const ordemAEstudantes = estudantes.sort();
const ordemInversa = estudantes.reverse();
console.log(ordemAEstudantes.includes('Joana'));
console.log(ordemAEstudantes.includes('Juliana'));

let html1 = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html1 = html1.split('section').join('ul');
html1 = html1.split('div').join('li');

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carros.slice()

console.log(carros.pop());

console.log(carros);
console.log(carrosCopia);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descrição,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
    const titulo = document.querySelector('h1').innerText;
    const descricao = document.querySelector('p').innerText;
    const aulas = document.querySelector('.aulas').innerText;
    const horas = document.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }  
});

console.log(arrayCursos);
console.log(objetoCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros1 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros1.filter(n => n > 100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos2 = ['Guitarras', 'Baixo', 'Bateria', 'Teclado'];
const possuiBaixo = instrumentos2.some((item) => {
    return item === 'Baixo'
});
console.log(possuiBaixo);


// Retorne o valor total das compras
const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Queijo',
      preco: 'R$ 10,60'
    },
    {
      item: 'Arroz',
      preco: 'R$ 5,50'
    }
  ];

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
    return acumulador + precoLimpo
}, 0);

console.log(valorTotal);