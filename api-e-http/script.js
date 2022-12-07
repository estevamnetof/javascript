// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//     console.log(pokemon);
// });

// const url = 'https://jsonplaceholder.typicode.com/posts/';

// const options = {
//     method: 'POST',
//     headears: {
//         "Content-Type": "application.json; charset=utf-8",
//     },
//     body: '"aula": "Javascript"'
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => {
//     console.log(json);
// });


// GET 
// const url = 'https://jsonplaceholder.typicode.com/posts/';
// fetch(url, {
//     method: 'GET'
// })
// .then(r => r.json())
// .then(r => console.log(r))


// POST
// const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch(url, {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json; charset=uft-8",
//     },
//     body: '{"titulo": "Javascript"}'
// })
// .then(r => r.json())
// .then(r => console.log(r))


// PUT 
// const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch(url, {
//     method: 'PUT',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     },
//     body: '{"titulo": "Javascript"}'
// })
// .then(r => r.json())
// .then(r => console.log(r))


// HEAD
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
    method: 'HEAD',
})

.then(response => {
    response.headers.forEach(console.log);
    console.log(response.headers.get('Content-Type'));
})