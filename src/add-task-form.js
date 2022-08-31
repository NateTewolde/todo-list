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

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");
  formHeader.textContent = "New Task";

  const createTaskForm = document.createElement("form");
  createTaskForm.setAttribute("action", "");
  createTaskForm.setAttribute("method", "post");
  createTaskForm.setAttribute("id", "new_task_form");

  const titleField = document.createElement("div");
  titleField.classList.add("form-field");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:\n";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title");
  titleField.appendChild(titleLabel);
  titleField.appendChild(titleInput);
  createTaskForm.appendChild(titleField);

  const descriptionField = document.createElement("div");
  descriptionField.classList.add("form-field");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description:\n";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionField.appendChild(descriptionLabel);
  descriptionField.appendChild(descriptionInput);
  createTaskForm.appendChild(descriptionField);

  const dueDateField = document.createElement("div");
  dueDateField.classList.add("form-field");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due-date:\n";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "due-date");
  dueDateInput.setAttribute("id", "due-date");
  dueDateField.appendChild(dueDateLabel);
  dueDateField.appendChild(dueDateInput);
  createTaskForm.appendChild(dueDateField);

  const priorityField = document.createElement("div");
  priorityField.classList.add("form-field");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");
  const priorityOption1 = document.createElement("option");
  priorityOption1.setAttribute("value", "1");
  priorityOption1.textContent = "1";
  const priorityOption2 = document.createElement("option");
  priorityOption2.setAttribute("value", "2");
  priorityOption2.textContent = "2";
  const priorityOption3 = document.createElement("option");
  priorityOption3.setAttribute("value", "3");
  priorityOption3.textContent = "3";
  const priorityOptionNone = document.createElement("option");
  priorityOptionNone.setAttribute("value", "");
  priorityOptionNone.setAttribute("selected", "");
  priorityOptionNone.textContent = "";

  prioritySelect.appendChild(priorityOption1);
  prioritySelect.appendChild(priorityOption2);
  prioritySelect.appendChild(priorityOption3);
  prioritySelect.appendChild(priorityOptionNone);

  priorityField.appendChild(priorityLabel);
  priorityField.appendChild(prioritySelect);
  createTaskForm.appendChild(priorityField);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-form-btn");
  submitBtn.setAttribute("type", "button");
  submitBtn.textContent = "Submit";
  createTaskForm.appendChild(submitBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-form-btn");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  createTaskForm.appendChild(cancelBtn);

  formSection.appendChild(formHeader);
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
  const priorityInput =
    prioritySelected.options[prioritySelected.selectedIndex].text;
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
