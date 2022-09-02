import {
  getTasks,
  getSortedByDate,
  deleteTask,
  findTaskIndex,
  updateTasksAndProjects,
  updateLocalStorage,
} from "./information-holder";
import { addTaskForm } from "./add-task-form";
import { formatISO } from "date-fns";

//input: array of tasks
//displays tasks seperated by priority level from 1-4
function displayTasks(tasks) {
  const content = document.querySelector("#content");

  if (tasks === undefined) {
    tasks = getSortedByDate();
  }

  const row = [];
  let tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("id", "tasks-container");

  let priority1Tasks = document.createElement("div");
  priority1Tasks.setAttribute("class", "priority1-tasks");
  let priority1Title = document.createElement("div");
  priority1Title.classList.add("priority-title");
  priority1Tasks.appendChild(priority1Title);

  let priority2Tasks = document.createElement("div");
  priority2Tasks.setAttribute("class", "priority2-tasks");

  let priority2Title = document.createElement("div");
  priority2Title.classList.add("priority-title");
  priority2Tasks.appendChild(priority2Title);

  let priority3Tasks = document.createElement("div");
  priority3Tasks.setAttribute("class", "priority3-tasks");

  let priority3Title = document.createElement("div");
  priority3Title.classList.add("priority-title");
  priority3Tasks.appendChild(priority3Title);

  let priority4Tasks = document.createElement("div");
  priority4Tasks.setAttribute("class", "priority4-tasks");

  let priority4Title = document.createElement("div");
  priority4Title.classList.add("priority-title");
  priority4Tasks.appendChild(priority4Title);

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

    let completedCheckbox = document.createElement("input");
    completedCheckbox.setAttribute("type", "checkbox");
    completedCheckbox.classList.add("completed-checkbox");
    if (tasks[i].getCompleted() == true) {
      completedCheckbox.setAttribute("checked", "");
    }

    taskItems.appendChild(completedCheckbox);
    taskItems.appendChild(title);
    taskItems.appendChild(description);
    taskItems.appendChild(dueDate);
    revisionItems.appendChild(editBtn);
    revisionItems.appendChild(deleteBtn);

    row[i].appendChild(taskItems);
    row[i].appendChild(revisionItems);

    let taskPriority = tasks[i].getPriority();
    if (taskPriority === "1") {
      priority1Tasks.appendChild(row[i]);
    }
    if (taskPriority === "2") {
      priority2Tasks.appendChild(row[i]);
    }
    if (taskPriority === "3") {
      priority3Tasks.appendChild(row[i]);
    }
    if (taskPriority === "") {
      priority4Tasks.appendChild(row[i]);
    }
  }

  let priority1Container = document.createElement("div");
  priority1Container.classList.add("priority-container");
  priority1Container.appendChild(priority1Title);
  priority1Container.appendChild(priority1Tasks);

  let priority2Container = document.createElement("div");
  priority2Container.classList.add("priority-container");
  priority2Container.appendChild(priority2Title);
  priority2Container.appendChild(priority2Tasks);

  let priority3Container = document.createElement("div");
  priority3Container.classList.add("priority-container");
  priority3Container.appendChild(priority3Title);
  priority3Container.appendChild(priority3Tasks);

  let priority4Container = document.createElement("div");
  priority4Container.classList.add("priority-container");
  priority4Container.appendChild(priority4Title);
  priority4Container.appendChild(priority4Tasks);

  tasksContainer.appendChild(priority1Container);
  tasksContainer.appendChild(priority2Container);
  tasksContainer.appendChild(priority3Container);
  tasksContainer.appendChild(priority4Container);
  content.appendChild(tasksContainer);
  formatEditBtn();
  formatDeleteBtn();
  checkForPriorities();
  formatCompletedCheckbox();
}

function refreshTasks() {
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
  if (addTaskBtn == null) {
    return;
  }
  addTaskBtn.addEventListener("click", () => {
    addTaskForm();
    removeAddTaskButton();
  });
}

function removeAddTaskButton() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  if (addTaskBtn === null) {
    return;
  }
  addTaskBtn.remove();
}

function formatCompletedCheckbox() {
  const completedCheckboxes = document.querySelectorAll(".completed-checkbox");
  completedCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      setCompleted(checkbox.parentNode.parentNode);
    });
  });
}

function setCompleted(taskElement) {
  let taskId = taskElement.getAttribute("data-task-id");
  let taskIndex = findTaskIndex(taskId);
  let tasks = getTasks();
  let task = tasks[taskIndex];
  if (task.getCompleted() === true) {
    task.completedTracker.push(false);
  } else {
    task.completedTracker.push(true);
  }
  updateLocalStorage();
  updateTasksAndProjects();
}

function addEditButton() {
  const editBtn = document.createElement("img");
  editBtn.classList.add("edit-button");
  editBtn.src = "../src/styles/images/pencil-outline.svg";
  return editBtn;
}

function formatEditBtn() {
  const editTaskBtns = document.querySelectorAll(".edit-button");
  editTaskBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      editBtn.parentNode.parentNode.classList.add("editing-task");
      addTaskForm();
      removeAddTaskButton();
      editTask(editBtn.parentNode.parentNode);
    });
  });
}

//Inputs the task's values into the form for editing
function editTask(taskElement) {
  let taskId = taskElement.getAttribute("data-task-id");
  let taskIndex = findTaskIndex(taskId);
  let tasks = getTasks();
  let task = tasks[taskIndex];
  document.getElementById("title").value = task.getTitle();
  document.getElementById("description").value = task.getDescription();
  document.getElementById("priority").value = task.getPriority();
  if (task.getDueDate() === "") {
    return;
  }
  document.getElementById("due-date").value = formatISO(
    new Date(task.getDueDate()),
    { representation: "date" }
  );
}

function addDeleteButton() {
  const deleteBtn = document.createElement("img");
  deleteBtn.classList.add("delete-button");
  deleteBtn.src = "../src/styles/images/trash-can-outline-smaller.svg";
  return deleteBtn;
}

function formatDeleteBtn() {
  const deleteTaskBtns = document.querySelectorAll(".delete-button");
  deleteTaskBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      setDeleteTask(deleteBtn.parentNode.parentNode);
      checkForPriorities();
    });
  });
}

function setDeleteTask(taskElement) {
  let taskId = taskElement.getAttribute("data-task-id");
  deleteTask(taskId);
  const taskRow = document.querySelector("[data-task-id=" + taskId + "]");
  taskRow.remove();
}

function refreshSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.removeAttribute("class");
  sideBar.classList.add("sidebar");
}

function clearPage() {
  const content = document.querySelector("#content");
  removeAllChildNodes(content);
}

//helper function to clear a element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function checkForPriorities() {
  const priority1Tasks = document.querySelector(".priority1-tasks");
  const priority2Tasks = document.querySelector(".priority2-tasks");
  const priority3Tasks = document.querySelector(".priority3-tasks");
  const priority4Tasks = document.querySelector(".priority4-tasks");

  removePriorityTitle(priority1Tasks);
  removePriorityTitle(priority2Tasks);
  removePriorityTitle(priority3Tasks);
  removePriorityTitle(priority4Tasks);
}

function removePriorityTitle(priorityTasks) {
  if (priorityTasks == null) {
    return;
  }
  if (!priorityTasks.hasChildNodes()) {
    priorityTasks.parentNode.remove();
  }
}

export {
  displayTasks,
  refreshTasks,
  removeAllChildNodes,
  setDeleteTask,
  clearPage,
  refreshSidebar,
  displayAddTasksBtn,
  formatAddTaskBtn,
};
