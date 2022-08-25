//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

import addTaskForm from "./add-task-form";
import { refreshTasks, removeAllChildNodes } from "./display-tasks";
import { getTasks, setTask } from "./information-holder";
import createHomepage from "./home-page";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import "./style.css";

//npm install date-fns --save for homepc

//temporary example tasks for testing
setTask("Task2", "Description2", "2022-08-27", "2");
setTask("Task1", "Description1", "2022-08-21", "1");
setTask("Task2", "Description2", "2022-08-26", "2");

setTask("Task4Date2", "Description4", "2022-08-25", "");
setTask("Task4Date1", "Description4", "2020-08-24", "");
setTask("Task4Date4", "Description4", "2025-01-01", "");
setTask("Task4Date3", "Description4", "2023-05-01", "");

setTask("Task3", "Description3", "2022-08-26", "3");
setTask("Task3", "Description3", "2022-08-24", "3");
setTask("Task3", "Description3", "2022-08-25", "3");

createHomepage();
formatTabs();

function formatTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      let tabIndex = tab.getAttribute("data-tab-id");
      refreshPage();

      if (tabIndex === "0") {
        createHomepage();
      }
      if (tabIndex === "1") {
        createTodayPage();
      }
      if (tabIndex === "2") {
        createThisWeekPage();
      }
      if (tabIndex === "3") {
        createProjectsPage();
      }
    });
  });
}

function refreshPage() {
  const content = document.querySelector("#content");
  removeAllChildNodes(content);
}

//DONE display tasks in home in seperated by priority
//      - maybe change it so that its similar to getSortedByDate()
//      - to use OOP principles better
//DONE then display tasks in home sorted by date
//DONE update addTask button to disappear if an add task form is already on screen
//DONE then format Today and This week tab's, using resturatn page as example.
//DONE just format it to be clicked on.
//DONE then Format Today Page to display all tasks due the current day
//DONE then format This Week Page to display all tasks due the week

//then add an Edit and Delete button to tasks, maybe easiest to just bring up the form again
//then format Projects section, should basically be the ability to make homepages with a different sidebar and header name
