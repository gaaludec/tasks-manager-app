import Task from './types';
import { loadTasks, saveTasks, createTask } from './tasks.ts';
import { renderTaskList, renderTask } from './dom.ts';

// Element selection
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input')!;
const taskList = document.querySelector('.list') as HTMLUListElement;

// Task list array
let tasks: Task[] = loadTasks();

// Handle form submission
const handleSubmit = (e: SubmitEvent): void => {
  e.preventDefault();

  const taskDescription = formInput.value.trim();
  if (taskDescription) {
    const task = createTask(taskDescription);
    tasks.push(task);
    renderTask(task, tasks, taskList);
    saveTasks(tasks);
    formInput.value = '';
  } else {
    alert('Please enter a task description');
  }
};

taskForm?.addEventListener('submit', handleSubmit);

// Initial rendering of tasks
renderTaskList(tasks, taskList);
