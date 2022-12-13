function adicionarTarefa() {
    const itemLista = document.querySelector('#todoList');

        const tarefa = document.createElement('li');
        tarefa.innerHTML = document.querySelector('#task').value;
        tarefa.classList.add('new-todo-list');
        itemLista.appendChild(tarefa);

        const remover = document.createElement('button');
        remover.innerHTML = 'Remover';
        remover.classList.add('new-todo-list');
        remover.onclick = () => {
            itemLista.removeChild(tarefa);
            itemLista.removeChild(remover);
        }
        itemLista.appendChild(remover);

        document.getElementById('#task').value = '';

       
}
