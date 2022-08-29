import addTaskForm from "./add-task-form";
import { refreshTasks, clearPage } from "./display-tasks";
import { getTasks, setTask } from "./information-holder";
import createHomepage from "./home-page";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import {
  createProjectsPage,
  addProjectTab,
  refreshProjectsTitleAttributes,
} from "./projects-page";
import "./style.css";
import { getFromLocalStorage } from "./local-storage-manager";

formatTestBtn();
function formatTestBtn() {
  const testBtn = document.querySelector(".test-btn");

  testBtn.addEventListener("click", () => {
    const tasks = getFromLocalStorage("taskArray");
    console.log(tasks);
    console.log(tasks[0].getTitle());
    const testTasks = getTasks();
    const myTasks = testTasks.slice(0);
    myTasks.splice(0, myTasks.length);
    for (let i = 0; i < testTasks.length; i++) {
      myTasks.push(testTasks[i]);
    }
    console.log(myTasks);
  });
}

//temporary example tasks for testing
setTask("Task2", "Description2", "2022-09-01", "2", "test");
setTask("Task1", "Description1", "2022-08-28", "1", "test");
setTask("Task2", "Description2", "2022-08-26", "2");

setTask("Task4Date2", "Description4", "2022-08-31", "", "test");
setTask("Task4Date1", "Description4", "2020-09-01", "");
setTask("Task4Date4", "Description4", "2025-01-01", "");
setTask("Task4Date3", "Description4", "2023-05-01", "");

setTask("Task3", "Description3", "2022-08-26", "3", "test");
setTask("Task3", "Description3", "2022-08-28", "3");
setTask("Task3", "Description3", "2022-09-02", "3");

createHomepage();
formatTabs();

function formatTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      refreshProjectsTitleAttributes();
      let tabIndex = tab.getAttribute("data-tab-id");
      if (tabIndex === "3") {
        createProjectsPage();
        return;
      }
      clearPage();

      if (tabIndex === "0") {
        createHomepage();
      }
      if (tabIndex === "1") {
        createTodayPage();
      }
      if (tabIndex === "2") {
        createThisWeekPage();
      }
    });
  });
}
