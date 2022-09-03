import {
  setDeleteTask,
  clearPage,
  displayAddTasksBtn,
  formatAddTaskBtn,
} from "./display-tasks";
import { setTask, getTasks, findTaskIndex } from "./information-holder";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import createHomepage from "./home-page";
import {
  displayProjectPage,
  refreshProjectsTitleAttributes,
} from "./projects-page";

function addTaskForm() {
  createTaskForm();
  submitFormButton();
  cancelFormButton();
}

function createTaskForm() {
  if (checkForForm() === true) {
    return -1;
  }

  const content = document.querySelector("#content");

  const formSection = document.createElement("div");
  formSection.setAttribute("id", "form-section");

  if (checkForEditing() === true) {
    formSection.classList.add("editing-form");
  }

  const createTaskForm = document.createElement("form");
  createTaskForm.setAttribute("action", "");
  createTaskForm.setAttribute("method", "post");
  createTaskForm.setAttribute("id", "new_task_form");
  createTaskForm.setAttribute("class", "form-fields");

  const formItems = document.createElement("div");
  formItems.classList.add("form-items");

  const priorityField = document.createElement("div");
  priorityField.classList.add("form-field");
  priorityField.classList.add("priority-field");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");
  const priorityOption1 = document.createElement("option");
  priorityOption1.setAttribute("value", "1");
  priorityOption1.classList.add("priority1-option");
  priorityOption1.textContent = "!!!";
  const priorityOption2 = document.createElement("option");
  priorityOption2.setAttribute("value", "2");
  priorityOption2.classList.add("priority2-option");
  priorityOption2.textContent = "!!";
  const priorityOption3 = document.createElement("option");
  priorityOption3.setAttribute("value", "3");
  priorityOption3.classList.add("priority3-option");
  priorityOption3.textContent = "!";
  const priorityOptionNone = document.createElement("option");
  priorityOptionNone.setAttribute("value", "");
  priorityOptionNone.setAttribute("selected", "");
  priorityOptionNone.classList.add("priority4-option");
  priorityOptionNone.textContent = "";

  prioritySelect.appendChild(priorityOption1);
  prioritySelect.appendChild(priorityOption2);
  prioritySelect.appendChild(priorityOption3);
  prioritySelect.appendChild(priorityOptionNone);

  priorityField.appendChild(priorityLabel);
  priorityField.appendChild(prioritySelect);
  formItems.appendChild(priorityField);

  const titleField = document.createElement("div");
  titleField.classList.add("form-field");
  titleField.classList.add("title-field");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title");
  titleField.appendChild(titleLabel);
  titleField.appendChild(titleInput);
  formItems.appendChild(titleField);

  const descriptionField = document.createElement("div");
  descriptionField.classList.add("form-field");
  descriptionField.classList.add("description-field");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionField.appendChild(descriptionLabel);
  descriptionField.appendChild(descriptionInput);
  formItems.appendChild(descriptionField);

  const dueDateField = document.createElement("div");
  dueDateField.classList.add("form-field");
  dueDateField.classList.add("due-date-field");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "due-date");
  dueDateInput.setAttribute("id", "due-date");
  dueDateField.appendChild(dueDateLabel);
  dueDateField.appendChild(dueDateInput);
  formItems.appendChild(dueDateField);

  createTaskForm.append(formItems);

  const formBtns = document.createElement("div");
  formBtns.classList.add("form-btns");

  const submitBtn = document.createElement("img");
  submitBtn.classList.add("submit-form-btn");
  submitBtn.setAttribute("type", "button");

  if (checkForEditing() == true) {
    submitBtn.src = "../src/styles/images/pencil-plus-outline.svg";
  } else {
    submitBtn.src = "../src/styles/images/plus.svg";
  }

  formBtns.appendChild(submitBtn);

  const cancelBtn = document.createElement("img");
  cancelBtn.classList.add("cancel-form-btn");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.src = "../src/styles/images/window-close.svg";
  formBtns.appendChild(cancelBtn);

  createTaskForm.appendChild(formBtns);

  formSection.appendChild(createTaskForm);
  content.appendChild(formSection);
}

function submitFormButton() {
  const submitFormBtn = document.querySelector(".submit-form-btn");
  submitFormBtn.addEventListener("click", () => {
    let projectName = "";
    if (checkForEditing() === true) {
      let taskElement = document.querySelector(".editing-task");
      let taskId = taskElement.getAttribute("data-task-id");
      let taskIndex = findTaskIndex(taskId);
      let tasks = getTasks();
      let task = tasks[taskIndex];
      if (task.getProjectId() !== undefined) {
        projectName += task.getProjectId();
        submitProjectTask();
      }
      setDeleteTask(taskElement);
    }

    if (checkforProjectPage() == true) {
      let projectElement = document.querySelector("[data-current-project]");
      if (projectName == "") {
        let projectId = projectElement.getAttribute("data-current-project");
        projectName += projectId;
      }
      submitProjectTask();

      return;
    }

    function submitProjectTask() {
      getTaskInput(projectName);
      clearPage();
      displayProjectPage(projectName);
    }

    if (checkForForm() === true) {
      getTaskInput();
    }

    if (checkForTodayPage() === true) {
      clearPage();
      createTodayPage();
      return;
    }
    if (checkForWeekPage() == true) {
      clearPage();
      createThisWeekPage();
      return;
    }

    clearPage();
    createHomepage();
  });
}

function cancelFormButton() {
  const cancelFormBtn = document.querySelector(".cancel-form-btn");
  if (cancelFormBtn == null) {
    return;
  }
  cancelFormBtn.addEventListener("click", () => {
    const taskForm = document.getElementById("form-section");
    if (taskForm == null) {
      return;
    }
    taskForm.remove();
    displayAddTasksBtn();
    formatAddTaskBtn();
  });
}

function getTaskInput(projectName) {
  if (!document.getElementById("title")) {
    return;
  }
  const titleInput = document.getElementById("title").value;
  const descriptionInput = document.getElementById("description").value;
  const dateInput = document.getElementById("due-date").value;
  const prioritySelected = document.getElementById("priority");
  const priorityChoice =
    prioritySelected.options[prioritySelected.selectedIndex].text;
  let priorityInput = "";

  if (priorityChoice === "!!!") {
    priorityInput += "1";
  }
  if (priorityChoice === "!!") {
    priorityInput += "2";
  }
  if (priorityChoice === "!") {
    priorityInput += "3";
  }
  console.log(priorityInput);
  setTask(titleInput, descriptionInput, dateInput, priorityInput, projectName);
}

//checks if an add task form is present on the page
function checkForForm() {
  const formCheck = document.getElementById("form-section");
  if (!formCheck) {
    return false;
  }
  return true;
}

//returns true if an editing task form is present on the page
function checkForEditing() {
  const editingCheck = document.querySelector(".editing-task");
  if (!editingCheck) {
    return false;
  }
  return true;
}

//returns true if the today page is currently on the page
function checkForTodayPage() {
  const todayPageCheck = document.querySelector(".today-page");
  if (!todayPageCheck) {
    return false;
  }
  return true;
}

//returns true if the week page is currently on the page
function checkForWeekPage() {
  const weekPageCheck = document.querySelector(".week-page");
  if (!weekPageCheck) {
    return false;
  }
  return true;
}

function checkforProjectPage() {
  const projectPageCheck = document.querySelector("[data-current-project]");
  if (!projectPageCheck) {
    return false;
  }
  return true;
}

export {
  addTaskForm,
  checkForTodayPage,
  checkForWeekPage,
  checkforProjectPage,
};
