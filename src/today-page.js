import { getSortedByDate } from "./information-holder";
import { isToday } from "date-fns";
import { displayTasks } from "./display-tasks";

function createTodayPage() {
  const content = document.querySelector("#content");

  const tasks = getSortedByDate();
  const todaysDateObj = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const todaysDate = document.createElement("div");
  todaysDate.classList.add("todays-date");
  todaysDate.textContent = todaysDateObj;
  content.appendChild(todaysDate);

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

export default createTodayPage;
