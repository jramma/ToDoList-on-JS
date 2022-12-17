const toDos = JSON.parse(localStorage.getItem('toDos')) || [];

const render =()=>{
    const todoList = document.getElementById('todo-list');
        // esto es lo mismo que un for, recorre el arr todos y les añade <li>
        const todosTemplate = toDos.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
        // seleccionar todos los li de todo-list:
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i)=>{
            // cada vez que hagas click>
            elemento.addEventListener('click',()=>{
                //eliminar
                elemento.parentNode.removeChild(elemento);
                toDos.splice(i,1)
                saveToDos()
                // y volvemos a llamar la función render
                // para que se actualicen los indices de toDos
                render()
            })
        })    
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        toDos.push(todoText);
        // guardar en local storage
        saveToDos()
        render();
    }

}

const saveToDos=()=>{
    const todoStrings=JSON.stringify(toDos)
    localStorage.setItem('toDos',todoStrings)
}

