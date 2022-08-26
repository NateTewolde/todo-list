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

//then format edit btn, maybe easiest to just bring up the form again
//then make it so that each priority section has a header and remove the priority # from the task itself
//then add a completed checkmark box
//then format Projects section, should basically be the ability to make homepages with a different sidebar and header name
