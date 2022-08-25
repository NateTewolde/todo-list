import { getSortedByDate } from "./information-holder";
import { isEqual } from "date-fns";

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

  for (let i = 0; i < tasks.length; i++) {
    console.log(isEqual(tasks[i], todaysDateObj));
  }
}

export default createTodayPage;
