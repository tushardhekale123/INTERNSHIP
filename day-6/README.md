# Day 6 - TypeScript & React Employee Dashboard

## Objective

Learn TypeScript fundamentals and React concepts by building an interactive Employee Management Dashboard.

## TypeScript Exercises

Three TypeScript files were created to practice different concepts:

- `fundamentals.ts` - Primitive types, arrays, functions, objects, and union types.
- `interfaces.ts` - Interfaces, arrays of objects, interface inheritance, and functions.
- `advanced-types.ts` - Type aliases, enums, generics, classes, type narrowing, type guards, and optional properties.

## React Concepts

- Components and JSX
- State management using `useState`
- Side effects using `useEffect`
- Events and forms
- Conditional rendering and lists
- Custom hooks
- API integration using Fetch API
- Error handling and form validation

## Dashboard Features

- Display employee records.
- Show total employees, total salary, average salary, and departments.
- Search employees by name.
- Filter employees by department.
- Sort employees by salary.
- Add new employees.
- Edit employee details.
- Delete employee records.
- Load sample users from an API.
- Display loading and error messages.
- Validate employee form inputs.

## Technologies Used

- React
- TypeScript
- HTML5
- CSS3
- Vite
- Fetch API
- Node.js and npm

## Project Structure

```text
day-6/
├── typescript/
│   ├── fundamentals.ts
│   ├── interfaces.ts
│   ├── advanced-types.ts
│   └── dist/
│       ├── fundamentals.js
│       ├── interfaces.js
│       └── advanced-types.js
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

## Run TypeScript Exercises

From the `day-6/react-app` directory, compile and run the exercises.

Example:

```bash
npx tsc ../typescript/fundamentals.ts --target ES2020 --module commonjs --outDir ../typescript/dist --ignoreConfig
node ../typescript/dist/fundamentals.js
```

Use the same commands with `interfaces.ts` and `advanced-types.ts` to run the other exercises.

## Learning Outcomes

- Understand TypeScript types, interfaces, and generics.
- Use classes, enums, union types, and type guards.
- Build React components using JSX.
- Manage state and events using React hooks.
- Fetch API data using `useEffect` and async/await.
- Create reusable custom hooks.
- Implement search, filtering, sorting, and employee management.
- Handle form validation and API errors.

## Limitations

The dashboard loads sample users from JSONPlaceholder. Department and salary values are generated for demonstration and are not real employee data.

Employee changes are stored in React state and reset when the page is refreshed. Permanent storage and a backend database have not been implemented.

## Conclusion

Day 6 provided practical experience with TypeScript, React, custom hooks, API integration, and building an interactive Employee Management Dashboard.