# Day 6 - TypeScript & React Employee Dashboard

## Objective

Learn TypeScript fundamentals and React concepts by building an interactive Employee Management Dashboard.

## TypeScript Concepts

- Primitive types
- Arrays and objects
- Interfaces
- Type aliases
- Union types
- Functions and classes
- Generics
- Type narrowing

## React Concepts

- Components and JSX
- Props and state
- Events and forms
- Conditional rendering
- Lists and component composition
- useState and useEffect
- Custom hooks
- API integration and error handling

## Dashboard Features

- Display employee records.
- Show total employees and average salary.
- Search employees by name.
- Filter employees by department.
- Sort employees by salary.
- Add new employees.
- Edit employee details.
- Delete employee records.
- Load sample users from an API.
- Display loading and error messages.

## Technologies Used

- React
- TypeScript
- HTML
- CSS
- Vite
- Fetch API

## Project Structure

```text
day-6/
├── typescript/
├── react-app/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── useEmployees.ts
│   │   ├── index.css
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```

## How to Run

Open the terminal in the React project folder:

```bash
cd day-6/react-app
npm install
npm run dev
```

Open the local URL displayed in the terminal.

## Learning Outcomes

- Understand TypeScript interfaces and types.
- Build React components using JSX.
- Manage state using useState.
- Fetch API data using useEffect and async/await.
- Create reusable custom hooks.
- Implement search, filtering, sorting, and employee management.

## Limitations

The dashboard uses sample API data. Department and salary values are generated for demonstration. Employee changes are stored in React state and reset when the page is refreshed.

## Conclusion

Day 6 provided practical experience with TypeScript, React, API integration, and building an interactive Employee Management Dashboard.