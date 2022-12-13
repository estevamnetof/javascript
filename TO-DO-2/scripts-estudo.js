// 'use strict';

// let banco = [
//     {'tarefa': 'Estudar JS', 'status': ''},
//     {'tarefa': 'Netflix', 'status': 'checked'}
// ]

// const criarItem = (tarefa, status, indice) => {
//     const item = document.createElement('label');
//     item.classList.add('new-todo-list');
//     item.innerHTML = `
//         <input type="checkbox" ${status} data-indice=${indice}>
//         <div>${tarefa}</div>
//         <button id="delete" class="material-symbols-outlined" data-indice=${indice}>delete</button>
//     `

//     document.getElementById('todoList').appendChild(item);
// }

// const limparTarefas = () => {
//     const todoList = document.querySelector('#todoList');
//     while(todoList.firstChild) {
//         todoList.removeChild(todoList.lastChild);
//     }
// }

// const atualizarTela = () => {
//     limparTarefas();
//     banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
// }

// const inserirItem = (event) => {
//     const tecla = event.key;
//     const botao = event.click;
//     const texto = event.target.value;
//     if(tecla === 'Enter') {
//         banco.push({'tarefa': texto, 'status': ''});
//         atualizarTela();
//         event.target.value = '';
//     }
// }

// const removerItem = (indice) => {
//     banco.splice(indice, 1);
//     atualizarTela();
// }

// const atualizarItem = (indice) => {
//     banco[indice].status = banco[indice].status === '' ? 'checked' : '';
//     atualizarTela();
// }

// const clickItem = (event) => {
//     const elemento = event.target;
//     if(elemento.type === 'button') {
//         const indice = elemento.dataset.indice;
//         removerItem(indice);
//     } else if(elemento.type === 'checkbox') {
//         const indice = elemento.dataset.indice;
//         atualizarItem(indice);
//     }
// }

// document.getElementById('task').addEventListener('keypress', inserirItem);
// document.getElementById('todoList').addEventListener('click', clickItem);


// atualizarTela();