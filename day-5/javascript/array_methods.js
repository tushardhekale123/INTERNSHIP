const employees = [
    { id: 101, name: "Aarav", department: "IT", salary: 35000 },
    { id: 102, name: "Priya", department: "HR", salary: 28000 },
    { id: 103, name: "Rahul", department: "IT", salary: 45000 },
    { id: 104, name: "Sneha", department: "Finance", salary: 40000 },
    { id: 105, name: "Kabir", department: "HR", salary: 30000 }
];

console.log(
    "Names:",
    employees.map(employee => employee.name)
);

console.log(
    "IT Employees:",
    employees.filter(employee => employee.department === "IT")
);

console.log(
    "Total Salary:",
    employees.reduce((total, employee) => total + employee.salary, 0)
);

console.log(
    "Employee 103:",
    employees.find(employee => employee.id === 103)
);

console.log(
    "Any salary above 40000?",
    employees.some(employee => employee.salary > 40000)
);

console.log(
    "Everyone earns above 20000?",
    employees.every(employee => employee.salary > 20000)
);

const sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Sorted by salary:", sortedEmployees);