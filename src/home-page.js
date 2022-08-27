import { refreshTasks, refreshSidebar } from "./display-tasks";
import "./style.css";

//refreshTasks();

function createHomepage() {
  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("home-page");
  sideBar.classList.add("current-tab");
  refreshTasks();
}

export default createHomepage;
