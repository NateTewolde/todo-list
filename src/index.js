import { clearPage } from "./display-tasks";

import createHomepage from "./home-page";
import createTodayPage from "./today-page";
import createThisWeekPage from "./this-week-page";
import {
  createProjectsPage,
  refreshProjectsTitleAttributes,
  refreshProjects,
} from "./projects-page";
import "./styles/style.css";
import githubSvgIcon from "../src/styles/images/github-svgrepo-com.svg";
import { checkIfLocalStorageIsEmpty } from "./local-storage-manager";
import { addProject, setTask } from "./information-holder";
import add from "date-fns/add";

setDefaults();
function setDefaults() {
  if (checkIfLocalStorageIsEmpty() === true) {
    let todaysDateObj = new Date();
    let todaysDate = todaysDateObj.toLocaleDateString("en-us");

    let addTwoDaysDate = add(todaysDateObj, {
      days: 2,
    }).toLocaleDateString("en-us");

    let add1WeekDate = add(todaysDateObj, {
      days: 7,
    }).toLocaleDateString("en-us");

    setTask(
      "Send email",
      "tell the boss its been done.",
      todaysDate,
      "1",
      undefined
    );
    setTask(
      "Milk",
      "Get some on the way home from work",
      todaysDate,
      "3",
      undefined,
      "yes"
    );
    setTask("Laundry", "use the tide", add1WeekDate, "3", undefined);

    setTask(
      "Wash dishes",
      "Use hot water this time",
      todaysDate,
      "2",
      "Chores",
      "yes"
    );
    setTask("Sweep floor", "maybe mop too after", addTwoDaysDate, "", "Chores");
    addProject("Chores");
  }
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
        addGithub();
      }
      if (tabIndex === "2") {
        createThisWeekPage();
        addGithub();
      }
    });
  });
}

function addGithub() {
  const githubSection = document.createElement("div");
  githubSection.classList.add("github-section");

  const githubName = document.createElement("div");
  githubName.classList.add("github-name");
  githubName.textContent = "Copyright © 2022 NateTewolde";
  githubSection.appendChild(githubName);

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "https://github.com/NateTewolde");

  const githubIcon = document.createElement("img");
  githubIcon.src = githubSvgIcon;

  githubLink.appendChild(githubIcon);
  githubSection.appendChild(githubLink);

  content.appendChild(githubSection);
}
