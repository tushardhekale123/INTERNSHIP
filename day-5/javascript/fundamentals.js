// Variables
const company = "Internship Company";
let employeeCount = 3;

// Employee object
const employee = {
    id: 101,
    name: "Aarav",
    department: "IT",
    salary: 35000
};

// Template literal
console.log(`Company: ${company}`);
console.log(`Employee Count: ${employeeCount}`);

console.log("\nEmployee Details:");
console.log(`Name: ${employee.name}`);
console.log(`Department: ${employee.department}`);
console.log(`Salary: ₹${employee.salary}`);

// Destructuring
const { name, department } = employee;

console.log(`\n${name} works in ${department}.`);

// Spread operator
const updatedEmployee = {
    ...employee,
    salary: 40000
};

console.log("\nUpdated Salary:", updatedEmployee.salary);

// Arrow function
const calculateBonus = salary => salary * 0.10;

console.log("Bonus:", calculateBonus(employee.salary));