// async function puxarDados() {
//     const dadosResponse = await fetch('./dados.json');
//     const dadosJSON = await dadosResponse.json();

//     document.body.innerText = dadosJSON.aula;
// }

// puxarDados();

function iniciarFetch() {
    fetch('./dados.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
        document.body.innerText = dadosJSON.titulo
    })
}
iniciarFetch();

async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
}


// Try/Catch
async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();
        document.body.innerText = dadosJSON.titulo;
    }
    catch(erro) {
        console.log(erro);
    }
}
puxarDados();


// Iniciar Fetch ao mesmo tempo
async function iniciarAsync() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');

    // ele espera o que está dentro da expressão () ocorrer primeiro
    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync();


// Promise
async function asyncSemPromise() {
    // Console não irá esperar
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
}
asyncSemPromise();


async function iniciarAsync() {
    await new Promise(resolve => {
        setTimeout(() => resolve(), 1000)
    });
    console.log('Depois de 1s');
}
iniciarAsync();