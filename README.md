# TaskFlow SPA

TaskFlow SPA is a Single Page Application built with Vanilla JavaScript, HTML, CSS, Tailwind CSS, Vite, and JSON Server. The project simulates a small productivity and task management system where users can register, log in, manage their own tasks, update their profile, and access different views depending on their role.

This application was created as a performance test project to practice modern frontend concepts without using frameworks such as React, Vue, or Angular. The main goal is to understand how a SPA works internally through client-side routing, dynamic rendering, modular code organization, authentication state, route protection, and communication with a fake REST API.

## Project Purpose

The purpose of TaskFlow SPA is to provide a simple but functional task management platform. Users can create and organize tasks, while administrators can access a management area with broader visibility over the system.

The project focuses on the following learning objectives:

- Build a SPA using Vanilla JavaScript.
- Implement navigation without full page reloads.
- Organize frontend code using a layered architecture.
- Manage authentication state with `localStorage`.
- Protect private routes based on authentication.
- Consume data from a fake backend using `json-server`.
- Separate responsibilities between views, services, routing, store, and utilities.

## Main Features

- Home page with general information about the application.
- User registration.
- User login and logout.
- Persistent session using `localStorage`.
- Protected routes for authenticated users.
- Automatic redirect for authenticated users trying to access login or register pages.
- Dashboard view for logged-in users.
- Profile view where users can manage their account information.
- Task list view.
- Task creation and editing form.
- Task deletion.
- Admin view for users with an administrator role.
- Custom 404 page for routes that do not exist.
- Data persistence through JSON Server.

## Technologies Used

- Vanilla JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Vite
- JSON Server
- SweetAlert2
- Browser `localStorage`
- Fetch API
- History API

## Architecture

The project follows a simple layered frontend architecture. This structure helps keep the code organized and easier to maintain.

```text
src/
  main.js
  components/
  router/
  services/
  store/
  styles/
  utils/
  views/
```

### Folder Responsibilities

- `main.js`: Application entry point. It loads global styles and initializes the router.
- `router/`: Contains the SPA route definitions and the client-side routing logic.
- `views/`: Contains the main screens of the application, such as login, register, dashboard, profile, tasks, admin, and not found pages.
- `services/`: Contains functions that communicate with the JSON Server API.
- `store/`: Contains the authentication store used to save, read, and remove the current user session.
- `styles/`: Contains global styles and Tailwind CSS configuration usage.
- `components/`: Intended for reusable UI components.
- `utils/`: Intended for helper functions shared across the application.

## Available Routes

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | Home page |
| `/login` | Public | User login page |
| `/register` | Public | User registration page |
| `/dashboard` | Private | Main dashboard for authenticated users |
| `/profile` | Private | Authenticated user profile page |
| `/tasks` | Private | Task list page |
| `/task-form` | Private | Task creation or editing form |
| `/admin` | Private | Administration page |

If a user tries to access a private route without being logged in, the application redirects them to `/login`. If an authenticated user tries to access `/login` or `/register`, the application redirects them to `/dashboard`.

## User Roles

The application works with two main roles:

### ADMIN

An administrator has access to the admin area and can manage broader system information.

Main permissions:

- Access the admin view.
- View system users.
- Have full visibility over the application data.

### USER

A regular user can access the main application features related to their own account.

Main permissions:

- Log in to the system.
- View the dashboard.
- Create tasks.
- Edit tasks.
- Delete tasks.
- View and update their profile.

## Data Model

The fake backend uses a `database.json` file with two main collections:

```json
{
  "users": [],
  "tasks": []
}
```

### Users

Each user includes basic account information:

- `id`
- `name`
- `lastName`
- `email`
- `password`
- `roles`

### Tasks

Tasks are stored in the `tasks` collection. They are connected to users through a user identifier, allowing the application to display tasks that belong to a specific user.

## Authentication Flow

The authentication system is intentionally simple because the project is focused on frontend SPA fundamentals.

1. The user enters their credentials on the login page.
2. The application searches for the user in the JSON Server API.
3. If the credentials are valid, the user is saved in `localStorage`.
4. The router uses the stored session to validate access to private routes.
5. When the user logs out, the session is removed from `localStorage`.

This approach is useful for learning purposes, but it is not intended for production authentication.

## API Endpoints

The frontend consumes the following JSON Server resources:

```text
http://localhost:3000/users
http://localhost:3000/tasks
```

Examples of operations used by the application:

- `GET /users`
- `GET /users?email=user@example.com`
- `POST /users`
- `PUT /users/:id`
- `GET /tasks`
- `GET /tasks?userid=:id`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

## Installation and Setup

### 1. Clone or download the project

Open the project folder in your code editor.

### 2. Install frontend dependencies

From the `Task-flow-spa` folder, run:

```bash
npm install
```

### 3. Start the frontend development server

```bash
npm run dev
```

The application will run with Vite, usually at:

```text
http://localhost:5173
```

### 4. Start the fake backend

From the backend folder that contains `database.json`, run JSON Server on port `3000`:

```bash
npx json-server database.json --port 3000
```

The API will be available at:

```text
http://localhost:3000
```

## Available Scripts

Inside the frontend project, the following scripts are available:

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## Current Project Status

The current version of the project includes the base SPA structure, routing system, authentication store, user services, task services, and main views for authentication, dashboard, profile, tasks, task form, admin, home, and not found pages.

Some parts of the system can still be improved, such as stronger role validation, better error handling, form validation, reusable components, and more complete task statistics.

## Possible Future Improvements

- Add stronger validation to forms.
- Improve authorization for the admin route.
- Add task status filters.
- Add task priority levels.
- Add due dates for tasks.
- Add dashboard statistics.
- Improve reusable components.
- Add loading states.
- Add confirmation dialogs for important actions.
- Improve responsive design details.

## Academic Note

This project was developed as part of a performance test to demonstrate understanding of SPA development, frontend architecture, route protection, API consumption, and basic state management using Vanilla JavaScript.
