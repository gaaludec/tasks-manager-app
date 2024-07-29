import Task from './types';

// Retrieve tasks from local storage
export const loadTasks = (): Task[] => {
  const storedData = localStorage.getItem('tasks');
  return storedData ? JSON.parse(storedData) : [];
};

// Save tasks to local storage
export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Create a new task
export const createTask = (description: string): Task => ({
  description,
  isCompleted: false,
});
