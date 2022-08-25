import { getSortedByDate } from "./information-holder";
import { isToday } from "date-fns";

function createTodayPage() {
  const content = document.querySelector("#content");

  const tasks = getSortedByDate();
  const todaysDateObj = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  getTodaysTasks(todaysDateObj);

  const todaysDate = document.createElement("div");
  todaysDate.classList.add("todays-date");
  todaysDate.textContent = todaysDateObj;

  content.appendChild(todaysDate);
}

function getTodaysTasks(todaysDateObj) {
  const tasks = getSortedByDate();
  const todaysTasksArray = [];

  for (let i = 0; i < tasks.length; i++) {
    if (isToday(new Date(tasks[i].getDueDate()))) {
      todaysTasksArray.push(tasks[i]);
    }
  }
  for (let j = 0; j < todaysTasksArray.length; j++) {
    console.log(todaysTasksArray[j].getDueDate());
    console.log(todaysTasksArray[j].getTitle());
  }
}

export default createTodayPage;
