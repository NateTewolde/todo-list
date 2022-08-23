//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

//  1: Make an add task form module w/button first
//  2: Make module for creating todo Objects
import addTaskForm from "./add-task-form";

addTaskBtn();
function addTaskBtn() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", addTaskForm);
}
