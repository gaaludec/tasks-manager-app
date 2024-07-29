import Task from './types';
import { saveTasks } from './tasks.ts';

// Render a single task
export const renderTask = (
  task: Task,
  tasks: Task[],
  taskList: HTMLUListElement
): void => {
  const listElement = document.createElement('li');
  listElement.classList.add('task-item');

  const checkTask = document.createElement('input');
  checkTask.type = 'checkbox';
  checkTask.checked = task.isCompleted;
  checkTask.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    saveTasks(tasks);
  });

  const taskDescriptionSpan = document.createElement('span');
  taskDescriptionSpan.textContent = task.description;
  taskDescriptionSpan.classList.add('task-desc');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    taskList.removeChild(listElement);
    saveTasks(tasks);
  });

  listElement.appendChild(checkTask);
  listElement.appendChild(taskDescriptionSpan);
  listElement.appendChild(deleteButton);
  taskList.appendChild(listElement);
};

// Render the task list
export const renderTaskList = (
  tasks: Task[],
  taskList: HTMLUListElement
): void => {
  tasks.forEach((task) => renderTask(task, tasks, taskList));
};
