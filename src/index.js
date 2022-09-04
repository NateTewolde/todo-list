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

//add project name to task row -meh. if its easy.

//style and make look nice and add visual button presses.
//and visual hovers over tasks
//the week's page also shows the range for the week like Aug 28 - Sep 3
//add default tasks and projects to the page.
//if local storage hasnt been accessed before then make it
//to avoid it being made everytime and fillign local storage

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
  githubIcon.src = "../src/styles/images/github-svgrepo-com.svg";

  githubLink.appendChild(githubIcon);
  githubSection.appendChild(githubLink);

  content.appendChild(githubSection);
}
