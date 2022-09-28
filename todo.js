let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));

if(Array.isArray(savedTodos)){
   todos = savedTodos
} else {
    todos = [{
    title:'Get groceries',
    dueDate: '2021-10-04',
    id: 'id1'
    },

    {
    title: 'Wash Car',
    dueDate: '2021-09-05',
    id: 'id2'
    },
    
    {
    title: 'Make dinner',
    dueDate: '2022-06-12',
    id: 'id3'
    }]; 
}


render();

   function createTodo(title, dueDate){
    const id = '' + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id : id
    });

   saveTodos(); 
}

   function removeTodo(idToDelete){
        todos = todos.filter(function(todo){
        if (todo.id === idToDelete){
            return false
        }else {
            return true
        }
    });

    saveTodos();
}

   function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos))
   }

   function addTodo(){
    let textBox = document.getElementById("todo-title");
    let title = textBox.value;
    const datePicker = document.getElementById("date-picker")
    const dueDate = datePicker.value
    createTodo(title, dueDate);
    render()
   };
   
   function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeTodo(idToDelete)
    render();

   }

   
   
   function render(){
    document.getElementById("todo-list").innerHTML = '';
    todos.forEach(function (todo) {
    let element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    deleteButton.style = 'margin-left: 12px;'; 
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    let todoList = document.getElementById("todo-list")
    todoList.appendChild(element);
    })
   }


  




