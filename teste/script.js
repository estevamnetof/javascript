let objetosGuardados = [];

function guardarObjeto(novoObjeto) {
    objetosGuardados.push(novoObjeto)
}

function apresentarObjetos() {
    if(objetosGuardados.length > 0) {
        console.log('Os objetos guardados são: ');
        objetosGuardados.forEach((objeto, indice) => {
            console.log('Objeto ' + (indice + 1) + ':');
            console.log(objeto);
        });
    } else {
        console.log('Nenhum objeto foi guardado ainda');
    }
}

let objeto1 = { nome: 'Objeto 1', valor: 42};
let objeto2 = { nome: 'Objeto 2', valor: 100};
let objeto3 = { nome: 'Objeto 3', valor: 7};

guardarObjeto(objeto1);
guardarObjeto(objeto2);
guardarObjeto(objeto3);

apresentarObjetos();