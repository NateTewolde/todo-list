//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

import addTaskForm from "./add-task-form";
import { displayTasks } from "./display-tasks";
import { getTasks } from "./information-holder";

import "./style.css";

addTaskBtn();
function addTaskBtn() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", addTaskForm);
}

testBtn();
function testBtn() {
  const testBtn = document.querySelector(".test-btn");
  testBtn.addEventListener("click", displayTasks);
}
