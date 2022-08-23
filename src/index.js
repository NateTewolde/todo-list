//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

//  1: Make an add task form module w/button first
//  2: Make module for creating todo Objects
//      -How to approach this...
//         need to get form input from form module to object module.
//         cant send it directly because OOP principles i think
//          return it to index.js and index.js sends it.
import { addTaskForm, submitFormButton } from "./add-task-form";

import "./style.css";

//when a new form is made the submit button is formatted
//when the submit button is clicked then getTaskInputs collects inputs
//send to a information holder module
addTaskBtn();
function addTaskBtn() {
  const addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", () => {
    addTaskForm();
    submitFormButton();
  });
}
