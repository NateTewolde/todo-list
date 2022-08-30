//module for holding data to be retrieved

import {
  checkForLocalStorage,
  addToLocalStorage,
  clearLocalStorage,
  getFromLocalStorage,
} from "./local-storage-manager";

//holds the Task objects.
const tasks = [];
const projects = [];

//Creates Task objects
function Task(taskAttributes) {
  let task = Object.create(taskActions);
  task.title = taskAttributes.title;
  task.description = taskAttributes.description;
  task.dueDate = taskAttributes.dueDate;
  task.priority = taskAttributes.priority;
  task.projectId = taskAttributes.projectId;
  task.completedTracker = taskAttributes.completedTracker;
  task.taskId = taskAttributes.taskId;
  return task;
}

//Adds task actions
const taskActions = {
  getTitle() {
    return this.title;
  },
  getDescription() {
    return this.description;
  },
  getDueDate() {
    return this.dueDate;
  },
  getPriority() {
    return this.priority;
  },
  getId() {
    return this.taskId;
  },
  updateCompleteTask() {
    if (!this.completedTracker[this.completedTracker.length - 1]) {
      this.completedTracker.push(true);
    } else {
      this.completedTracker.push(false);
    }
  },
  getCompleted() {
    return this.completedTracker[this.completedTracker.length - 1];
  },
  getProjectId() {
    return this.projectId;
  },
};

//Creates object with non function task attributes
function taskAttributes(
  title,
  description,
  dueDate,
  priority,
  projectId,
  taskId,
  completedTracker
) {
  return {
    title,
    description,
    dueDate,
    priority,
    projectId,
    taskId,
    completedTracker,
  };
}

//uses Task to make objects and pushes them to tasks.
function setTask(title, description, dueDate, priority, projectId) {
  let dueDateFormatted = dueDate.replace(/-/g, "/");
  let dueDateObj = new Date(dueDateFormatted).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  if (dueDateObj === "Invalid Date") {
    dueDateObj = "";
  }
  let taskId = (
    "Task" +
    title.replace(/ /g, "_") +
    getRandomIntInclusive()
  ).replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");
  const completedTracker = [false];

  tasks.push(
    Task(
      taskAttributes(
        title,
        description,
        dueDateObj,
        priority,
        projectId,
        taskId,
        completedTracker
      )
    )
  );
  updateLocalStorage();
}

function updateLocalStorage() {
  if (!checkForLocalStorage()) {
    return;
  }
  clearLocalStorage();
  addToLocalStorage("taskArray", tasks);
  addToLocalStorage("projectArray", projects);
}

function updateTasksAndProjects() {
  if (!checkForLocalStorage()) {
    return;
  }
  tasks.splice(0, tasks.length);
  const localTasks = formatLocalTasks();
  tasks.push(...localTasks);
  if (getFromLocalStorage("projectArray") == null) {
    return;
  }
  projects.splice(0, projects.length);
  const localProjects = getFromLocalStorage("projectArray").slice(0);
  projects.push(...localProjects);
}

// turn the methodless task objects from local storage
// into Task objects with working functions
function formatLocalTasks() {
  if (getFromLocalStorage("taskArray") == null) {
    return tasks;
  }
  const localTasks = getFromLocalStorage("taskArray").slice(0);
  const formattedLocalTasks = localTasks.map((task) => Task(task));
  return formattedLocalTasks;
}

function getTasks() {
  updateTasksAndProjects();
  return tasks;
}

function getSortedByDate() {
  const unsortedTasks = getTasks();

  const sortedByDate = unsortedTasks.sort(
    (a, b) => new Date(a.getDueDate()) - new Date(b.getDueDate())
  );
  return sortedByDate;
}

function deleteTask(theTasksId) {
  let taskIndex = findTaskIndex(theTasksId);
  tasks.splice(taskIndex, 1);
  updateLocalStorage();
}

function findTaskIndex(theTasksId) {
  let taskIndex = tasks.findIndex((index) =>
    checkForMatchingIds(index, theTasksId)
  );
  return taskIndex;
}

function checkForMatchingIds(task, theTasksId) {
  return task.getId() == theTasksId;
}

//Helper function that returns a random number between and including a mix/max
function getRandomIntInclusive() {
  let setMin = 0;
  let setMax = 10000;
  let min = Math.ceil(setMin);
  let max = Math.floor(setMax);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function addProject(projectName) {
  projects.push(projectName);
  updateLocalStorage();
}

function getProjects() {
  updateTasksAndProjects();
  return projects;
}

function removeProject(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i] === projectName) {
      projects.splice(i, 1);
    }
  }
  updateLocalStorage();
}

//returns true if a project name already exists
function checkForProjectName(projectName) {
  return projects.includes(projectName);
}

export {
  setTask,
  getTasks,
  getSortedByDate,
  deleteTask,
  findTaskIndex,
  addProject,
  getProjects,
  removeProject,
  checkForProjectName,
  getRandomIntInclusive,
  formatLocalTasks,
  updateTasksAndProjects,
  updateLocalStorage,
};
