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

export { setTask, getTasks };
