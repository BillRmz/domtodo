//Selectors 

const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//Event Listeners 

todoButton.addEventListener("click", addtodo)


//functions 

function addtodo(e){
    //prevent for refreshing
    e.preventDefault()

    //create a element div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //create li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value 
    newTodo.classList.add('todo-item')
    //appends newtodo to a todoDiv
    todoDiv.appendChild(newTodo)

    //checkmark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML ='<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

  //trash button
  const trashButton = document.createElement('button')
  trashButton.innerHTML ='<i class="fas fa-trash"></i>'
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton)
  
  todoList.appendChild(todoDiv)

  todoInput.value = ""

}

