// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;
//     if(condicao) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// console.log(promessa);


// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;
//     if(condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject();
//     }
// });

// console.log(promessa);


// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// console.log(promessa);


// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;
//     if(condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa.then(resolucao => {
//     console.log(resolucao);
// });


// const promessa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolvida');
//     }, 1000)
// });

// promessa.then(resolucao => console.log(resolucao));


// const promessa = new Promise((resolve, reject) => {
//     resolve('Etapa 1');
// });

// promessa.then(r => {
//     console.log(r); // Etapa 1
//     return 'Etapa 2';
// }).then(resolucao => {
//     console.log(resolucao); // Etapa 2
//     return 'Etapa 3';
// }).then(r => r + 4)
// .then(r => {
//     console.log(r); // Etapa 34
// });


// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa.then(resolucao => {
//     console.log(resolucao);
// }).catch(reject => {
//     console.log(reject);
// });


// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//         resolve('Estou pronto!');
//     } else {
//         reject(Error('Um erro ocorreu'));
//     }
// });

// promessa.then(resolucao => {
//     console.log(resolucao);
// }, reject => {
//     console.log(reject);
// });


// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//         resolve('Estou pronto');
//     } else {
//         reject(Error('Um erro ocorreu.'));
//     }
// });

// promessa.then(resolucao => {
//     console.log(resolucao);
// }, reject => {
//     console.log(reject);
// }).finally(() => {
//     console.log('Acabou');
// });


// const login = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Login efetuado');
//     }, 1000);
// });

// const dados = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Dados carregados');
//     }, 1500);
// });

// const tudoCarregado = Promise.all([login, dados]);

// tudoCarregado.then(respostas => {
//     console.log(respostas);
// });


const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('Login efetuado');
    }, 1000);
});

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('Dados carregados');
    }, 1500);
});

const tudoCarregado = Promise.race([login, dados]);

tudoCarregado.then(r => console.log(r));