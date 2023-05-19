
// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));


// const frutas = ['Banana', 'Morango', 'Uva'];

// for(const fruta of frutas) {
//     // console.log(fruta);
// }

const frase = 'Isso é JavaScript';

for(const char of frase) {
    // console.log(char);
}


// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//     btn.style.background = 'blue';
// }

// console.log(...buttons)

// buttons.forEach(btn => {
//     btn.style.background = 'red';
// });

const carro = {
    marca: 'Honda',
    ano: 2018,
}

for(const car in carro) {
    // console.log(car);
}


const frutas = ['Banana', 'Morango', 'Uva'];

for(const index in frutas) {
    // console.log(index);
}

for(const index in frutas) {
    // console.log(frutas[index]);
}


const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
    // console.log(`${style}: ${btnStyles[style]}`);
}


let i = 0;
do {
    console.log(i++)
} while (i <= 5)


// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }