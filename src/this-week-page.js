import { getSortedByDate } from "./information-holder";
import { isThisWeek, getWeek, lastDayOfWeek } from "date-fns";
import { displayTasks, refreshSidebar } from "./display-tasks";

function createThisWeekPage() {
  const content = document.querySelector("#content");

  const sideBar = document.querySelector(".sidebar");
  refreshSidebar();
  sideBar.classList.add("week-page");
  sideBar.classList.add("current-tab");

  const thisWeeksDateObj = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const thisWeeksDate = document.createElement("div");
  thisWeeksDate.classList.add("thisWeeks-date");
  thisWeeksDate.textContent = thisWeeksDateObj;
  content.appendChild(thisWeeksDate);

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

export default createThisWeekPage;
