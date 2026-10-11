// Employee data
const employees = [
    { id: 101, name: "Aarav", department: "IT", salary: 35000 },
    { id: 102, name: "Priya", department: "HR", salary: 28000 },
    { id: 103, name: "Rahul", department: "IT", salary: 45000 },
    { id: 104, name: "Sneha", department: "Finance", salary: 40000 },
    { id: 105, name: "Kabir", department: "HR", salary: 30000 }
];

// 1. map() - Get employee names
const employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

// 2. filter() - Employees in IT
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);
console.log("\nIT Employees:", itEmployees);

// 3. reduce() - Calculate total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("\nTotal Salary:", totalSalary);

// 4. find() - Find employee by ID
const foundEmployee = employees.find(employee => employee.id === 103);
console.log("\nFound Employee:", foundEmployee);

// 5. some() - Is anyone earning above 40000?
const hasHighSalary = employees.some(employee => employee.salary > 40000);
console.log("\nAny salary above 40000?", hasHighSalary);

// 6. every() - Does everyone earn above 20000?
const allAboveMinimum = employees.every(employee => employee.salary > 20000);
console.log("\nEveryone earns above 20000?", allAboveMinimum);

// 7. sort() - Sort by salary, highest first
const sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);
console.log("\nEmployees sorted by salary:", sortedEmployees);