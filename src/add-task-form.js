import { refreshTasks } from "./display-tasks";
import { setTask, getTasks } from "./information-holder";

function addTaskForm() {
  createTaskForm();
  submitFormButton();
}

function createTaskForm() {
  if (checkForForm() === true) {
    return -1;
  }

  const content = document.querySelector("#content");

  const formSection = document.createElement("div");
  formSection.setAttribute("id", "form-section");

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");
  formHeader.textContent = "New Task";

  const createTaskForm = document.createElement("form");
  createTaskForm.setAttribute("action", "");
  createTaskForm.setAttribute("method", "post");
  createTaskForm.setAttribute("id", "new_book_form");

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
  //dueDateInput.setAttribute("placeholder", "08/22/2022");
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

  formSection.appendChild(formHeader);
  formSection.appendChild(createTaskForm);
  content.appendChild(formSection);
}

function submitFormButton() {
  const submitFormBtn = document.querySelector(".submit-form-btn");
  submitFormBtn.addEventListener("click", () => {
    getTaskInput();
    refreshTasks();
  });
}

function getTaskInput() {
  const titleInput = document.getElementById("title").value;
  const descriptionInput = document.getElementById("description").value;
  const dateInput = document.getElementById("due-date").value;
  const prioritySelected = document.getElementById("priority");
  const priorityInput =
    prioritySelected.options[prioritySelected.selectedIndex].text;

  setTask(titleInput, descriptionInput, dateInput, priorityInput);
}

//checks if an add task form is present on the page
function checkForForm() {
  const formCheck = document.getElementById("form-section");
  if (!formCheck) {
    return false;
  }
  return true;
}
export default addTaskForm;
