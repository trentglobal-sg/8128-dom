

function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    }
    todos.push(newTodo)
}

function deleteTodo(todos, idToDelete) {
    // let index = null;
    // for (let i = 0; i < todos.length; i++) {
    //     if (todos[i].id === idToDelete) {
    //         index = i;
    //         break;
    //     }
    // }

    // if the index is not found, findIndex will return -1
    const index = todos.findIndex(t=> t.id === idToDelete);
    if (index !== -1) {
        todos.splice(index, 1);
    }
}

function modifyTodo(todos, idToModify, newTaskName, newUrgency) {
    const index = todos.findIndex( t => t.id === idToModify);
    if (index !== -1) {
        const modifiedTodo = {
            id: idToModify,
            name: newTaskName,
            urgency: newUrgency
        }

        todos[index] = modifiedTodo;
    }
}