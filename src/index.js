document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoInput = document.getElementById('new-task-description')
  const todoList = document.getElementById("tasks")
  const form = document.getElementById("create-task-form")

  const addTodo = (e) => {
    e.preventDefault()
    const todo = createTodoItem(todoInput.value)
    todoList.appendChild(todo)
  }

  const createTodoItem = (todo) => {
    const item = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = " X "
    btn.style.marginLeft = '5px'
    btn.addEventListener('click', () => item.remove())
    item.innerText = todo
    item.appendChild(btn)
    return item
  }
  form.addEventListener('submit', (e) => addTodo(e))
});
