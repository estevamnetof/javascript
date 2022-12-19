const btn = document.querySelector('#btn');

function adicionarTarefas(event) {
    const itemLista = document.querySelector('#todoList');
    const task = document.querySelector('#task');

    const tarefa = document.createElement('label');
    tarefa.classList.add('new-todo-list');
    tarefa.innerHTML = task.value
    itemLista.appendChild(tarefa);


    const remover = document.createElement('button');
    remover.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    remover.classList.add('new-todo-list-btn');
    remover.onclick = () => {
        itemLista.removeChild(tarefa);
        itemLista.removeChild(remover);
    }
    itemLista.appendChild(remover);
    
    task.value = '';
}

function adicionarEnter(event) {
    if (event.key === 'Enter') {
        adicionarTarefas();
    }
}

btn.addEventListener('click', adicionarTarefas);
window.addEventListener('keydown', adicionarEnter);


// // Criar um botão:
// function createButton(background = 'blue', color = 'red') {
//     const buttonElement = document.createElement('button');
//     buttonElement.style.background = background;
//     buttonElement.style.color = color;
//     return buttonElement;
// }

// const redButton = createButton('black', 'tomato');