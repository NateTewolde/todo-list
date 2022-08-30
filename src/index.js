import { clearPage } from "./display-tasks";

import createHomepage from "./home-page";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import {
  createProjectsPage,
  refreshProjectsTitleAttributes,
  refreshProjects,
} from "./projects-page";
import "./style.css";

//Add rename button for projects -this could be hard because then
//all tasks within that project would also have to be renamed.
//add project name to task row -meh
//delete button on project tabs should also delete all the tasks in it

//style and make look nice and add visual button presses
//and visual hovers over tasks

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
