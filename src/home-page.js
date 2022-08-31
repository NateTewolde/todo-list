import { refreshTasks, refreshSidebar, clearPage } from "./display-tasks";
import "./style.css";

function createHomepage() {
  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("home-page");
  sideBar.classList.add("current-tab");
  clearPage();
  addHomeHeader();
  refreshTasks();
}

function addHomeHeader() {
  const homeHeaderSection = document.createElement("div");
  homeHeaderSection.classList.add("header-section");

  const homeTitle = document.createElement("div");
  homeTitle.classList.add("header-title");
  homeTitle.textContent = "Home";

  const homesDateObj = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const headerDate = document.createElement("div");
  headerDate.classList.add("header-date");
  headerDate.textContent = homesDateObj;

  homeHeaderSection.appendChild(homeTitle);
  homeHeaderSection.appendChild(headerDate);
  content.appendChild(homeHeaderSection);
}

export default createHomepage;
