import { getTasks } from "./information-holder";
import addTaskForm from "./add-task-form";

function displayTasks() {
  const content = document.querySelector("#content");

  let tasks = getTasks();
  const row = [];
  let tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("id", "tasks-container");
  for (let i = 0; i < tasks.length; i++) {
    row[i] = document.createElement("div");
    row[i].classList.add("task-row");
    let title = tasks[i].getTitle();
    let description = tasks[i].getDescription();
    let dueDate = tasks[i].getDueDate();
    let priority = tasks[i].getPriority();
    row[i].textContent =
      title + ", " + description + ", " + dueDate + ", " + priority;
    tasksContainer.appendChild(row[i]);
  }
  content.appendChild(tasksContainer);
}

function refreshTasks() {
  removeAllChildNodes(content);
  displayAddTasksBtn();
  formatAddTaskBtn();
  displayTasks();
}

function displayAddTasksBtn() {
  const addTasksBtn = document.createElement("button");
  addTasksBtn.classList.add("add-task-btn");
  addTasksBtn.textContent = "Add Task";
  content.appendChild(addTasksBtn);
}

function formatAddTaskBtn() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", addTaskForm);
}

//helper function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { displayTasks, refreshTasks };
