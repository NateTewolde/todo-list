import { getTasks, getSortedByDate, deleteTask } from "./information-holder";
import addTaskForm from "./add-task-form";

//can visibly seperate priorities using CSS,
//use colors shades for those sections
//like red for 1, orange: 2, yellow: 3
// and white or something for none

//displays tasks seperated by priority level from 1-none
function displayTasks(tasks) {
  const content = document.querySelector("#content");

  if (tasks === undefined) {
    tasks = getSortedByDate();
  }

  const row = [];
  let tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("id", "tasks-container");
  let priority1Container = document.createElement("div");
  priority1Container.setAttribute("class", "priority1-container");
  let priority2Container = document.createElement("div");
  priority2Container.setAttribute("class", "priority2-container");
  let priority3Container = document.createElement("div");
  priority3Container.setAttribute("class", "priority3-container");
  let priority4Container = document.createElement("div");
  priority4Container.setAttribute("class", "priority4-container");
  for (let i = 0; i < tasks.length; i++) {
    row[i] = document.createElement("div");
    row[i].classList.add("task-row");
    row[i].setAttribute("data-task-id", tasks[i].getId());
    let taskItems = document.createElement("div");
    taskItems.classList.add("task-items");
    let revisionItems = document.createElement("div");
    revisionItems.classList.add("revision-items");

    let editBtn = addEditButton();
    let deleteBtn = addDeleteButton();

    let title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = tasks[i].getTitle();

    let description = document.createElement("div");
    description.classList.add("task-description");
    description.textContent = tasks[i].getDescription();

    let dueDate = document.createElement("div");
    dueDate.classList.add("task-due-date");
    dueDate.textContent = tasks[i].getDueDate();

    let priority = document.createElement("div");
    priority.classList.add("task-priority");
    priority.textContent = tasks[i].getPriority();

    taskItems.appendChild(title);
    taskItems.appendChild(description);
    taskItems.appendChild(dueDate);
    taskItems.appendChild(priority);
    revisionItems.appendChild(editBtn);
    revisionItems.appendChild(deleteBtn);

    row[i].appendChild(taskItems);
    row[i].appendChild(revisionItems);

    let taskPriority = tasks[i].getPriority();
    if (taskPriority === "1") {
      priority1Container.appendChild(row[i]);
    }
    if (taskPriority === "2") {
      priority2Container.appendChild(row[i]);
    }
    if (taskPriority === "3") {
      priority3Container.appendChild(row[i]);
    }
    if (taskPriority === "") {
      priority4Container.appendChild(row[i]);
    }
  }
  tasksContainer.appendChild(priority1Container);
  tasksContainer.appendChild(priority2Container);
  tasksContainer.appendChild(priority3Container);
  tasksContainer.appendChild(priority4Container);
  content.appendChild(tasksContainer);
  //formatEditBtn();
  formatDeleteBtn();
}

function refreshTasks() {
  removeAllChildNodes(content);
  displayTasks();
  displayAddTasksBtn();
  formatAddTaskBtn();
}

function displayAddTasksBtn() {
  const addTasksBtn = document.createElement("button");
  addTasksBtn.classList.add("add-task-btn");
  addTasksBtn.textContent = "Add Task";
  content.appendChild(addTasksBtn);
}

function formatAddTaskBtn() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", () => {
    addTaskForm();
    removeAddTaskButton();
  });
}

function removeAddTaskButton() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.remove();
}

function addEditButton() {
  const editBtn = document.createElement("div");
  editBtn.classList.add("edit-button");
  editBtn.textContent = "Edit";
  return editBtn;
}

function formatEditBtn() {
  const editBtn = document.querySelectorAll(".edit-button");
  editBtn.addEventListener("click", () => {
    //form pops up populated already with the users input
    //that the user can change. If user submits then it deletes
    //the task and a new task is made. Easy
    //delete button can be seperate from edit button. Edit Delete
  });
}

function addDeleteButton() {
  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("delete-button");
  deleteBtn.textContent = "Delete";
  return deleteBtn;
}

function formatDeleteBtn() {
  const deleteTaskBtns = document.querySelectorAll(".delete-button");
  deleteTaskBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      setDeleteTask(deleteBtn.parentNode.parentNode);
    });
  });
}

function setDeleteTask(task) {
  let taskId = task.getAttribute("data-task-id");
  deleteTask(taskId);
  const taskRow = document.querySelector("[data-task-id=" + taskId + "]");
  taskRow.remove();
}

//helper function to clear a element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { displayTasks, refreshTasks, removeAllChildNodes };
