import { displayTasks, refreshSidebar } from "./display-tasks";
import {
  addProject,
  checkForProjectName,
  getProjects,
  getRandomIntInclusive,
  getSortedByDate,
  getProjectId,
} from "./information-holder";
import {
  removeAllChildNodes,
  clearPage,
  displayAddTasksBtn,
  formatAddTaskBtn,
} from "./display-tasks";
import "./style.css";

const content = document.querySelector("#content");
const projectsContainer = document.querySelector(".projects-container");

function refreshProjects() {
  clearProjects();
  displayProjects();
  formatProjectTabs();
  formatAddProjectBtn();
  formatAddTaskBtn();
}

function createProjectsPage() {
  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("projects-page");
  refreshProjects();
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
  if (addProjectBtn === null || addProjectBtn === undefined) {
    return;
  }
  addProjectBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("project-input-name").value;
    if (nameInput == null || nameInput == undefined) {
      return;
    }

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
    if (projects[i] == null) {
      return;
    }
    let projectTab = document.createElement("div");
    projectTab.classList.add("project-tab");
    projectTab.setAttribute("data-project", projects[i]);
    projectTab.textContent = projects[i];
    projectsContainer.appendChild(projectTab);
  }
}

function formatProjectTabs() {
  const projectTabs = document.querySelectorAll("[data-project]");
  projectTabs.forEach((projectTab) => {
    if (projectTab === null || projectTab === undefined) {
      return;
    }
    projectTab.addEventListener("click", () => {
      let projectName = projectTab.getAttribute("data-project");
      refreshProjectsTitleAttributes();
      appendCurrentProjectToProjectsTitle(projectName);
      clearPage();
      displayProjectPage(projectName);
    });
  });
}

function displayProjectPage(projectName) {
  clearPage();
  const projectTasks = getProjectsTasks(projectName);
  displayTasks(projectTasks);
  refreshProjects();
  displayAddTasksBtn();
  formatAddTaskBtn();
}

function getProjectsTasks(projectName) {
  const tasks = getSortedByDate();

  const projectTasks = tasks.filter(
    (task) => task.getProjectId() === projectName
  );
  return projectTasks;
}

function appendCurrentProjectToProjectsTitle(projectName) {
  const projectsTab = document.querySelector(".projects-tab-title");
  projectsTab.setAttribute("data-current-project", projectName);
}

function refreshProjectsTitleAttributes() {
  let projectsTitle = document.querySelector("[data-current-project]");
  if (projectsTitle == null) {
    return;
  }
  projectsTitle.removeAttribute("data-current-project");
}

function clearProjects() {
  removeAllChildNodes(projectsContainer);
}

export {
  createProjectsPage,
  addProjectTab,
  displayProjectPage,
  refreshProjectsTitleAttributes,
};

//steps: put an attribute in the
