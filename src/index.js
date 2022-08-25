//layout: Home tab will show all tasks sorted by priority and date,
//with their project name next to it. Home will also be like a project
//that can have tasks added to it.

import addTaskForm from "./add-task-form";
import { refreshTasks } from "./display-tasks";
import { getTasks, setTask } from "./information-holder";
import "./style.css";

//refreshTasks();

//DONE display tasks in home in seperated by priority
//then display tasks in home sorted by date
//then format Today and This week tab's

//example tasks for testing
setTask("Task2", "Description2", "2022-08-27", "2");
setTask("Task1", "Description1", "2022-08-21", "1");

setTask("Task4Date2", "Description4", "2022-11-25", "");
setTask("Task4Date1", "Description4", "2020-08-24", "");
setTask("Task4Date4", "Description4", "2025-01-01", "");
setTask("Task4Date3", "Description4", "2023-05-01", "");

setTask("Task3", "Description3", "2022-08-24", "3");

refreshTasks();
