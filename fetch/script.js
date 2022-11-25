// fetch('./arquivo.txt').then((response) => {
//     return response.text();
// }).then((corpo) => {
//     console.log(corpo);
// })


// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => response.json())
// .then(cep => {
//     console.log(cep);
// });


const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
});


// const div = document.createElement('div');

// fetch('./sobre.html')
// .then(response => response.text())
// .then(htmlBody => {
//     div.innerHTML = htmlBody;
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
// });


// const div = document.createElement('div');

// fetch('./imagem.png')
// .then(r => r.blob())
// .then(imgBlob => {
//     const blobUrl = URL.createObjectURL(imgBlob);
//     console.log(blobUrl);
// });


// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//     const cloneResponse = r.clone();
//     r.json().then(json => {
//         console.log(json);
//     });
//     cloneResponse.text().then(text => {
//         console.log(text);
//     });
// });


// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//     r.headers.forEach(console.log);
// });


// const div = document.createElement('div');
// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(r => {
//     console.log(r.status, r.ok);
//     if(r.status === 404) {
//         console.log('Página não encontrada')
//     }
// })

const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(r => {
    console.log(r.url);
});
