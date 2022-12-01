// function areaQuadrado(lado) {
//     return lado * lado;
// }

// const perimetroQuadrado = new Function('lado', 'return lado * 4');

// console.log(perimetroQuadrado);

// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.length);
// console.log(somar.name);

// const carro = {
//     marca: 'Ford',
//     ano: 2018
// }

// const moto = {
//     marca: 'Honda',
//     ano: 2019
// }

// function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro.call(moto);


// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach(item => console.log(item));

// carros.forEach.call(carros, item => console.log(item));


// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas, item => console.log(item));


// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//     this.element.classList.add(classe);
// }

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista);


// const novoSeletor = {
//     element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(novoSeletor, 'ativar');

// Array.prototype.mostreThis = function() {
//     console.log(this);
// }

// const frutas = ['Uva', 'Maçã', 'Banana'];
// frutas.mostreThis();

// Array.prototype.pop.call(frutas);
// frutas.pop();


// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, function(item) {
//     return item.classList.contains('ativo');
// });

// console.log(filtro);


// const numeros = [3,4,6,1,34,44,32];
// console.log(Math.max.apply(null, numeros));
// console.log(Math.max.call(null, 3,4,6,1,34,44,32 ));


// const li = document.querySelectorAll('li');

// function itemPossuiAtivo(item) {
//     return item.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);


// console.log(filtro1);
// console.log(filtro2);

// const li = document.querySelectorAll('li');

// const filtrarLi = Array.prototype.filter.bind(li, function(item) {
//     return item.classList.contains('ativo');
// });

// console.log(filtrarLi());

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
//     acelerar: function(aceleracao, tempo) {
//         return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//     }
// }

// carro.acelerar(100, 20);
// // Ford acelerou 100 em 20

// const honda = { 
//     marca: 'Honda',
// };

// const acelerarHonda = carro.acelerar.bind(honda);
// acelerarHonda(200, 10)
// // Honda acelerou 200 em 10


// function imc(altura, peso) {
//     return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.80);

// imc(1.80, 70); // 21.6
// imc180(70); //21.6


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totalParagrafos = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length
});

console.log(totalParagrafos);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    elemento.innerHTML = conteudo;
    return elemento
}

console.log(criarElemento('ul', 'azul', 'Esse é o conteúdo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a 
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de Javascript');
const cursosHTML = h1Titulo('Cursos de HTML');

console.log(cursosJS, cursosHTML);