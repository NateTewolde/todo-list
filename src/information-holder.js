//module for holding data to be retrieved

//holds the Task objects.
const tasks = [];

//uses Task to make objects and pushes them to tasks.
function setTask(title, description, dueDate, priority) {
  tasks.push(Task(title, description, dueDate, priority));
}

//Creates Task objects
const Task = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  return { getTitle, getDescription, getDueDate, getPriority };
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

export { setTask, getTasks, getSortedByDate };
