import { displayTasks, refreshSidebar } from "./display-tasks";
import {
  addProject,
  checkForProjectName,
  getProjects,
  getSortedByDate,
  removeProject,
  removeProjectTasks,
} from "./information-holder";
import {
  removeAllChildNodes,
  clearPage,
  displayAddTasksBtn,
  formatAddTaskBtn,
} from "./display-tasks";
import createHomepage from "./home-page";
import createThisWeekPage from "./this-week-page";
import createTodayPage from "./today-page";
import {
  checkForTodayPage,
  checkforProjectPage,
  checkForWeekPage,
} from "./add-task-form";
import "./styles/style.css";
import addProjPlusIcon from "./styles/images/add-proj-plus.svg";
import listSvgIcon from "../src/styles/images/format-list-checkbox.svg";
import trashCanIcon from "../src/styles/images/trash-can-outline.svg";
import cancelProjIcon from "../src/styles/images/cancel-proj.svg";

const content = document.querySelector("#content");
const projectsContainer = document.querySelector(".projects-container");

function refreshProjects() {
  clearProjects();
  displayProjects();
  formatProjectTabs();
  formatDeleteProjectBtns();
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

  const projectFormItems = document.createElement("div");
  projectFormItems.classList.add("project-form-items");

  let listIcon = document.createElement("img");
  listIcon.src = listSvgIcon;
  projectFormItems.appendChild(listIcon);

  const nameField = document.createElement("div");
  nameField.classList.add("form-field");
  nameField.classList.add("project-name-field");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "project-input-name");
  nameInput.setAttribute("id", "project-input-name");
  nameInput.setAttribute("placeholder", "Project");
  nameField.appendChild(nameInput);
  projectFormItems.appendChild(nameField);

  createProjectForm.appendChild(projectFormItems);

  const addProjectBtns = document.createElement("div");
  addProjectBtns.classList.add("add-project-btns");

  const addBtn = document.createElement("img");
  addBtn.classList.add("add-project-btn");
  addBtn.setAttribute("type", "button");
  addBtn.src = addProjPlusIcon;
  addProjectBtns.appendChild(addBtn);

  const cancelBtn = document.createElement("img");
  cancelBtn.classList.add("cancel-project-btn");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.src = cancelProjIcon;
  addProjectBtns.appendChild(cancelBtn);

  createProjectForm.appendChild(addProjectBtns);

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

    let projectTabItems = document.createElement("div");
    projectTabItems.classList.add("project-tab-items");
    projectTabItems.classList.add("tab");

    let listIcon = document.createElement("img");
    listIcon.src = listSvgIcon;

    let projectTabTitle = document.createElement("div");
    projectTabTitle.textContent = projects[i];

    let deleteProject = document.createElement("img");
    deleteProject.classList.add("delete-project-btn");
    deleteProject.src = trashCanIcon;

    projectTabItems.appendChild(listIcon);
    projectTabItems.appendChild(projectTabTitle);

    projectTab.appendChild(projectTabItems);
    projectTab.appendChild(deleteProject);
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
      if (!checkForProjectName(projectName)) {
        return;
      }
      refreshProjectsTitleAttributes();
      appendCurrentProjectToProjectsTitle(projectName);
      clearPage();
      displayProjectPage(projectName);
    });
  });
}
//need to seperate delete and tab button because hittin
//delete causes tab to form afterwords
function formatDeleteProjectBtns() {
  const deleteProjBtns = document.querySelectorAll(".delete-project-btn");
  deleteProjBtns.forEach((deleteBtn) => {
    if (deleteBtn == null) {
      return;
    }
    deleteBtn.addEventListener("click", () => {
      let projectName = deleteBtn.parentNode.getAttribute("data-project");
      let projectTab = deleteBtn.parentNode;
      projectTab.remove();
      removeProject(projectName);
      removeProjectTasks(projectName);

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
      if (checkforProjectPage() == true) {
        let projectElement = document.querySelector("[data-current-project]");
        let currentProj = projectElement.getAttribute("data-current-project");
        if (projectName === currentProj) {
          clearPage();
          createHomepage();
          return;
        }
        clearPage();
        displayProjectPage(currentProj);
        return;
      }

      clearPage();
      createHomepage();
    });
  });
}

function displayProjectPage(projectName) {
  clearPage();
  addProjectHeader(projectName);
  const projectTasks = getProjectsTasks(projectName);
  displayTasks(projectTasks);
  refreshProjects();
  displayAddTasksBtn();
  formatAddTaskBtn();
}

function addProjectHeader(projectName) {
  const projHeaderSection = document.createElement("div");
  projHeaderSection.classList.add("header-section");

  const projTitle = document.createElement("div");
  projTitle.classList.add("header-title");
  projTitle.textContent = projectName;

  const todaysDateObj = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const headerDate = document.createElement("div");
  headerDate.classList.add("header-date");
  headerDate.textContent = todaysDateObj;

  projHeaderSection.appendChild(projTitle);
  projHeaderSection.appendChild(headerDate);
  content.appendChild(projHeaderSection);
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
  refreshProjects,
};

//steps: put an attribute in the
