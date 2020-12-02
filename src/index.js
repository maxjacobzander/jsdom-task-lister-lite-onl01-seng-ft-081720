document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // form and relevant input fields --> byID
    // form: create-task-form
    // text: new-task-description
    const taskForm = document.getElementById("create-task-form");
    // const taskDescription = document.getElementById("new-task-description");
    taskForm.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
  event.preventDefault();
  const taskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;

  const todoList = document.getElementById("tasks");
  todoList.appendChild(newTask);

  event.target.reset();
}

// type a task into an input field

// have a submit button
  // use preventDefault() to not redirect

// have the inputted text appear on the dom
  // POST