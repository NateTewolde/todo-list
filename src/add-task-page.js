function addTaskForm() {
  const content = document.querySelector("#content");

  const formSection = document.createElement("div");
  formSection.setAttribute("id", "form-section");

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");
  formHeader.textContent = "New Task";

  const addTaskForm = document.createElement("form");
  addTaskForm.setAttribute("action", "");
  addTaskForm.setAttribute("method", "post");
  addTaskForm.setAttribute("id", "new_book_form");

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
  addTaskForm.appendChild(titleField);

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
  addTaskForm.appendChild(descriptionField);

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
  addTaskForm.appendChild(dueDateField);

  const priorityField = document.createElement("div");
  priorityField.classList.add("form-field");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority";
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");
  const priorityOption1 = document.createElement("option");
  priorityOption1.setAttribute("value", "1");
  priorityOption1.setAttribute("selected", "");
  priorityOption1.textContent = "1";
  const priorityOption2 = document.createElement("option");
  priorityOption2.setAttribute("value", "2");
  priorityOption2.textContent = "2";
  const priorityOption3 = document.createElement("option");
  priorityOption3.setAttribute("value", "3");
  priorityOption3.textContent = "3";
  const priorityOption4 = document.createElement("option");
  priorityOption4.setAttribute("value", "4");
  priorityOption4.textContent = "4";

  prioritySelect.appendChild(priorityOption1);
  prioritySelect.appendChild(priorityOption2);
  prioritySelect.appendChild(priorityOption3);
  prioritySelect.appendChild(priorityOption4);

  priorityField.appendChild(priorityLabel);
  priorityField.appendChild(prioritySelect);
  addTaskForm.appendChild(priorityField);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-form-btn");
  submitBtn.setAttribute("type", "button");
  submitBtn.textContent = "Submit";
  addTaskForm.appendChild(submitBtn);

  formSection.appendChild(formHeader);
  formSection.appendChild(addTaskForm);
  content.appendChild(formSection);

  //submitFormButton();
}
export default addTaskForm;
