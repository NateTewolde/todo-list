import { refreshSidebar } from "./display-tasks";
import {
  addProject,
  checkForProjectName,
  getProjects,
  getRandomIntInclusive,
} from "./information-holder";
import { removeAllChildNodes, clearPage } from "./display-tasks";
import "./style.css";

const content = document.querySelector("#content");
const projectsContainer = document.querySelector(".projects-container");

function refreshProjects() {
  clearProjects();
  displayProjects();
  formatAddProjectBtn();
}

function createProjectsPage() {
  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("projects-page");
  sideBar.classList.add("current-tab");
  //refreshProjects();
  addProjectTab();
}

function addProjectTab() {
  createProjectForm();
  formatAddProjectBtn();
  formatCancelProjectBtn();
}

function createProjectForm() {
  const formSection = document.createElement("div");
  formSection.setAttribute("id", "project-form-section");

  const createProjectForm = document.createElement("form");
  createProjectForm.setAttribute("action", "");
  createProjectForm.setAttribute("method", "post");
  createProjectForm.setAttribute("id", "new_project_form");

  const nameField = document.createElement("div");
  nameField.classList.add("form-field");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "name:\n";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "project-input-name");
  nameInput.setAttribute("id", "project-input-name");
  nameInput.setAttribute("placeholder", "Enter Project Name");
  nameField.appendChild(nameLabel);
  nameField.appendChild(nameInput);
  createProjectForm.appendChild(nameField);

  const addBtn = document.createElement("button");
  addBtn.classList.add("add-project-btn");
  addBtn.setAttribute("type", "button");
  addBtn.textContent = "Add";
  createProjectForm.appendChild(addBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-project-btn");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  createProjectForm.appendChild(cancelBtn);

  projectsContainer.appendChild(createProjectForm);
}

function formatAddProjectBtn() {
  const addProjectBtn = document.querySelector(".add-project-btn");
  if (addProjectBtn == null) {
    return;
  }
  addProjectBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("project-input-name").value;

    if (!checkForProjectName(nameInput)) {
      addProject(nameInput);
    } else {
      alert("Names taken bub");
    }

    refreshProjects();
  });
}

function formatCancelProjectBtn() {
  const cancelProjectBtn = document.querySelector(".cancel-project-btn");
  if (cancelProjectBtn == null) {
    return;
  }
  cancelProjectBtn.addEventListener("click", () => {
    const projectForm = document.getElementById("new_project_form");
    projectForm.remove();
  });
}

function displayProjects() {
  const projects = getProjects();

  for (let i = 0; i <= projects.length; i++) {
    let projectTab = document.createElement("div");
    projectTab.classList.add("project-tab");
    projectTab.setAttribute("data-project-id", projects[i]);
    projectTab.textContent = projects[i];
    projectsContainer.appendChild(projectTab);
  }
}

function clearProjects() {
  removeAllChildNodes(projectsContainer);
}

export default createProjectsPage;

//format cancel button
// then format all those projects so that when clicked on they display
//tasks.
//then put an add task button to add tasks to those projects
