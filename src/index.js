//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

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

//then format Projects section,
//should basically be the ability to make homepages with a
//different sidebar and header name
//and the tasks from there will populate home

//each project will work like todays page with displayTasks(task array)
//make it a page where you can click on to make new projects
//which will work like their own thing. can add a project ID
// to each task object to identify which tasks should be displayed in
//the projects page. home, today and this week will display all projects
//but projects will only display their own tasks.
