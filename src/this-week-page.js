import { getSortedByDate } from "./information-holder";
import { isThisWeek, getWeek, lastDayOfWeek } from "date-fns";
import { displayTasks, refreshSidebar } from "./display-tasks";
import "./styles/style.css";

function createThisWeekPage() {
  const content = document.querySelector("#content");

  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("week-page");
  sideBar.classList.add("current-tab");

  addThisWeekHeader();
  const thisWeeksTasks = getThisWeeksTasks();
  displayTasks(thisWeeksTasks);
}

function getThisWeeksTasks() {
  const tasks = getSortedByDate();
  const thisWeeksTasksArray = [];

  for (let i = 0; i < tasks.length; i++) {
    if (isThisWeek(new Date(tasks[i].getDueDate()))) {
      thisWeeksTasksArray.push(tasks[i]);
    }
  }
  return thisWeeksTasksArray;
}

function addThisWeekHeader() {
  const weekHeaderSection = document.createElement("div");
  weekHeaderSection.classList.add("header-section");

  const weekTitle = document.createElement("div");
  weekTitle.classList.add("header-title");
  weekTitle.textContent = "This Week";

  const weeksDateObj = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const headerDate = document.createElement("div");
  headerDate.classList.add("header-date");
  headerDate.textContent = weeksDateObj;

  weekHeaderSection.appendChild(weekTitle);
  weekHeaderSection.appendChild(headerDate);
  content.appendChild(weekHeaderSection);
}

export default createThisWeekPage;
