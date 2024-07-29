# Task Manager App

This is a simple task manager application built with Vite and TypeScript. The app allows users to add tasks, mark them as completed, delete tasks, and persist tasks using local storage.

## Table of Contents

- [Task Manager App](#task-manager-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Code Overview](#code-overview)
    - [Task Management Functions](#task-management-functions)
    - [DOM Manipulation Functions](#dom-manipulation-functions)
    - [Main Application](#main-application)
    - [CSS](#css)
    - [HTML](#html)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Add tasks with descriptions
- Mark tasks as completed
- Delete tasks
- Persist tasks in local storage

## Installation

1. Create a new project using Vite with the vanilla TypeScript template:
   ```bash
   npm create vite@latest task-manager-app -- --template vanilla-ts
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).
2. Use the input field to add a task description.
3. Press "Enter" or submit the form to add the task to the list.
4. Mark tasks as completed by checking the checkbox next to each task.
5. Delete tasks by clicking the "Delete" button next to each task.
6. Tasks will be saved to local storage and reloaded on page refresh.

## Code Overview

### Task Management Functions

- **loadTasks**: Retrieves tasks from local storage.
- **saveTasks**: Saves tasks to local storage.
- **createTask**: Creates a new task with a given description.

### DOM Manipulation Functions

- **renderTask**: Renders a single task item in the task list.
- **renderTaskList**: Renders all tasks in the task list.

### Main Application

- Handles form submission to add tasks.
- Initializes and renders tasks on initial page load.

### CSS

Uses flexbox to align task items and styles the delete button to look more visually appealing.

### HTML

Links the CSS file and includes the form and task list.

## Contributing

If you have suggestions for improving this project, please open an issue or create a pull request.

## License

This project is licensed under the MIT License.
