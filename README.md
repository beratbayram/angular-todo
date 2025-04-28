# Angular Todo Application Documentation

## Overview

The Angular Todo application is a task management tool built with Angular. It allows users to create, edit, and manage tasks with features like urgency toggling, due dates, and task completion tracking. The application leverages PrimeNG components for a modern and responsive UI.

## Project Structure

- **`src/components`**
  - **`task-list.component.ts`**: Displays a list of tasks with options to mark as completed, toggle urgency, and delete tasks.
  - **`edit-task.component.ts`**: Provides a dialog for creating or editing tasks with fields for title, description, urgency, and due date.

- **`src/utils`**
  - **`Task.ts`**: Defines the `Task` interface, representing the structure of a task object.

## Features

1. **Task List**

   - Displays tasks in a collapsible panel format.
   - Allows marking tasks as completed using a checkbox.
   - Provides a button to toggle the urgency of a task.
   - Displays due dates with color-coded indicators for overdue tasks.

2. **Task Editing**
   - Modal dialog for creating or editing tasks.
   - Includes fields for:
     - Title (required)
     - Description (max length: 255 characters)
     - Urgency (toggle switch)
     - Due date (datepicker)
   - Validates form inputs before submission.

## Dependencies

The project uses `pnpm` for dependency management. Key dependencies include:

- **Angular**: Framework for building the application.
- **PrimeNG**: UI components for Angular.
- **TypeScript**: Language for type-safe development.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version `^18.18.0 || ^20.9.0 || >=21.1.0`)
- Angular CLI (`^19.2.7`)
- pnpm (`^8.0.0` recommended)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd angular-todo
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

## Development Server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you make any changes to the source files.

## Building

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

To execute unit tests using [Karma](https://karma-runner.github.io), run:

```bash
ng test
```

## Running End-to-End Tests

To run end-to-end tests, use:

```bash
ng e2e
```

Note: Angular CLI does not include an end-to-end testing framework by default. You can configure one like Protractor or Cypress.

## Theming

This project uses PrimeNG themes. A custom theme, `NOIR_PRESET`, is defined in [`src/utils/NOIR_PRESET.ts`](src/utils/NOIR_PRESET.ts). You can modify the theme to customize the application's appearance.

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [PrimeNG Documentation](https://www.primefaces.org/primeng/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
