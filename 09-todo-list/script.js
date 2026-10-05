// DOMContentLoaded is triggered when the web page is ready
// all the HTML elements have been created and is ready
document.addEventListener("DOMContentLoaded", function () {
    function main() {
        let todos = [];
        // add three todos for testing
        addTodo(todos, "Walk the dog", 5);
        addTodo(todos, "Clean the room", 5);
        addTodo(todos, "Pay the Bill", 2);

        renderTodos(todos);

        // add an event handler to the add button
        document.querySelector("#addBtn").addEventListener("click", function () {
            const todoName = document.querySelector("#todoName").value;
            const taskUrgency = document.querySelector("#taskUrgency").value;
            addTodo(todos, todoName, taskUrgency);
            renderTodos(todos);
        })


    }

    function renderTodos(todos) {
        const todoList = document.querySelector("#todoList");

        // remove all existing drawn todos from the list
        todoList.innerHTML = "";

        for (let t of todos) {
            const liElement = document.createElement("li");
            liElement.innerHTML = `<span>${t.name}</span>
                             <span>${t.urgency}</span>
                             <button class="updateBtn btn btn-primary btn-sm">Update</button>
                             <button class="deleteBtn btn btn-danger btn-sm">Delete</button>
                             `

            // querySelector can be called from any HTML element, not just document

            // when we create an anon function, for any non-local variables, its value will be remembered
            // and reused when the anon function is called

            // for closures to work, the variable must be from outside its scope
            // and CANNOT be global variable
            liElement.querySelector(".deleteBtn").addEventListener("click", function () {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("Deleting", t);
                        deleteTodo(todos, t.id);
                        renderTodos(todos);
                    }
                });
            })

            liElement.querySelector(".updateBtn").addEventListener("click", function () {
                // const newTodoName = prompt("Please enter the new todo name", t.name);
                // const newUrgency = prompt("Please enter the urgency from 1 to 5", t.urgency);

                Swal.fire({
                    title: "Update task",
                    html: `
                         <div class="mt-3">
                            <label class="form-label">Todo Name:</label>
                            <input type="text" value="${t.name}" id="newTodoName" class="form-control" placeholder="Todo name" />
                         </div>
                         <div class="mt-3">
                            <label class="form-label">Urgency</label>
                            <select id="newTaskUrgency" class="form-control">
                                <option value="1" ${t.urgency === 1 ? "selected" : ""}>1</option>
                                <option value="2" ${t.urgency === 2 ? "selected" : ""}>2</option>
                                <option value="3" ${t.urgency === 3 ? "selected" : ""}>3</option>
                                <option value="4"  ${t.urgency === 4 ? "selected" : ""}>4</option>
                                <option value="5"  ${t.urgency === 5 ? "selected" : ""}>5</option>
                            </select>
                        </div>
                    `,
                    showCancelButton: true,
                    showCloseButton: true,
                    preConfirm:function() {
                        const newTodoName = document.querySelector("#newTodoName").value;
                        const newUrgency = document.querySelector("#newTaskUrgency").value;
                        modifyTodo(todos, t.id, newTodoName, newUrgency);
                        renderTodos(todos);
                    }
                })

                modifyTodo(todos, t.id, newTodoName, newUrgency);
                renderTodos(todos);
            })

            // liElement.classList.add('list-group-item');
            // // add display: flex
            // liElement.classList.add('d-flex');
            // liElement.classList.add('justify-content-between');
            // liElement.classList.add('align-items-center');
            liElement.className = "list-group-item d-flex justify-content-between align-items-center"

            todoList.appendChild(liElement);
        }
    }

    main();
})