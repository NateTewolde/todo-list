import { getTasks } from "./information-holder";

function displayTasks() {
  console.log("1");
  const content = document.querySelector("#content");

  let tasks = getTasks();
  console.log(tasks[0].getTitle);
  const row = [];
  let tasksContainer = document.createElement("div");
  tasksContainer.setAttribute("id", "tasks-container");
  console.log("2");
  for (let i = 0; i < tasks.length; i++) {
    row[i] = document.createElement("div");
    row[i].classList.add("task-row");
    let title = tasks[i].getTitle();
    console.log("title: " + title);
    let description = tasks[i].getDescription();
    let dueDate = tasks[i].getDueDate();
    let priority = tasks[i].getPriority();
    row[i].textContent =
      title + ", " + description + ", " + dueDate + ", " + priority;
    tasksContainer.appendChild(row[i]);
  }
  content.appendChild(tasksContainer);
}

export { displayTasks };
