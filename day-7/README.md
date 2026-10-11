# Day 7 - Next.js and Node.js

## Overview

In Day 7 of my internship, I worked on Next.js, Node.js, Express.js, and REST API development.

I created an Employee Management Dashboard using Next.js and a separate Employee REST API using Node.js and Express.js.

## Technologies Used

- Next.js
- React
- TypeScript
- Node.js
- Express.js
- JavaScript
- CSS

## Project Structure

day-7/
├── nextjs-app/
│   └── app/
│
├── node-api/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── employeeModel.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── services/
│   │   └── employeeService.js
│   ├── server.js
│   └── package.json
│
└── README.md

## Tasks Completed

### 1. Next.js Employee Dashboard

- Created an Employee Management Dashboard.
- Displayed employee information.
- Added functionality to add new employees.
- Implemented employee editing and deletion.
- Added employee search functionality.
- Implemented department filtering.
- Added salary sorting.
- Displayed employee summary information.

### 2. Node.js and Express REST API

- Created a backend server using Express.js.
- Implemented employee CRUD operations.
- Created separate controllers, models, routes, and services.
- Added error-handling middleware.
- Configured CORS and JSON request handling.
- Created API endpoints for managing employee records.

## API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get an employee by ID |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/:id` | Update employee details |
| DELETE | `/api/employees/:id` | Delete an employee |

## How to Run the Project

### Backend

Open a terminal and run:

    cd day-7/node-api
    npm install
    npm run dev

Backend URL: `http://localhost:5000`

Employee API: `http://localhost:5000/api/employees`

### Frontend

Open another terminal and run:

    cd day-7/nextjs-app
    npm install
    npm run dev

Dashboard URL: `http://localhost:3000`

Keep both terminal sessions running while using the applications.

## Learning Outcomes

- Learned the basics of Next.js and React.
- Created an interactive employee dashboard.
- Practiced managing data using React state.
- Learned to create REST APIs using Node.js and Express.js.
- Understood CRUD operations and HTTP methods.
- Learned to organize backend code into separate modules.
- Practiced handling JSON requests and responses.
- Learned to run frontend and backend applications separately.

## Conclusion

This Day 7 assignment helped me understand the fundamentals of Next.js, Node.js, Express.js, and REST API development.

I developed an Employee Management Dashboard and a separate backend API for employee management. I also learned how to organize backend code and work with different HTTP methods.

This assignment improved my understanding of frontend and backend development.