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
  refreshProjects,
} from "./projects-page";
import "./style.css";
import { getFromLocalStorage } from "./local-storage-manager";

//Make sure mark completed saves
//add cancel button for Add task forms
//add project name to task row
//style and make look nice and add visual button presses
//and visual hovers over tasks

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

createHomepage();
formatTabs();
refreshProjects();

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
