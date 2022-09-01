import { getSortedByDate } from "./information-holder";
import { isToday } from "date-fns";
import { displayTasks, refreshSidebar } from "./display-tasks";

function createTodayPage() {
  const content = document.querySelector("#content");

  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("today-page");
  sideBar.classList.add("current-tab");

  addTodayHeader();

  const todaysTasks = getTodaysTasks();
  displayTasks(todaysTasks);
}

function getTodaysTasks() {
  const tasks = getSortedByDate();
  const todaysTasksArray = [];

  for (let i = 0; i < tasks.length; i++) {
    if (isToday(new Date(tasks[i].getDueDate()))) {
      todaysTasksArray.push(tasks[i]);
    }
  }
  return todaysTasksArray;
}

function addTodayHeader() {
  const todayHeaderSection = document.createElement("div");
  todayHeaderSection.classList.add("header-section");

  const todayTitle = document.createElement("div");
  todayTitle.classList.add("header-title");
  todayTitle.textContent = "Today";

  const todaysDateObj = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const headerDate = document.createElement("div");
  headerDate.classList.add("header-date");
  headerDate.textContent = todaysDateObj;

  todayHeaderSection.appendChild(todayTitle);
  todayHeaderSection.appendChild(headerDate);
  content.appendChild(todayHeaderSection);
}

export default createTodayPage;
