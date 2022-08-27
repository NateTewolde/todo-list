//module for holding data to be retrieved

//holds the Task objects.
const tasks = [];

//uses Task to make objects and pushes them to tasks.
function setTask(title, description, dueDate, priority) {
  let dueDateFormatted = dueDate.replace(/-/g, "/");
  let dueDateObj = new Date(dueDateFormatted).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  if (dueDateObj === "Invalid Date") {
    dueDateObj = "";
  }
  tasks.push(Task(title, description, dueDateObj, priority));
}

//Creates Task objects
const Task = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const taskId = (
    "Task" +
    title.replace(/ /g, "_") +
    getRandomIntInclusive()
  ).replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");
  const getId = () => taskId;
  return { getTitle, getDescription, getDueDate, getPriority, getId };
};

function getTasks() {
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

export { setTask, getTasks, getSortedByDate, deleteTask, findTaskIndex };
