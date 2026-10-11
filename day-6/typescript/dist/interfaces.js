"use strict";
const employees = [
    {
        id: 1,
        name: "Aarav Sharma",
        department: "IT",
        salary: 35000,
    },
    {
        id: 2,
        name: "Priya Patil",
        department: "HR",
        salary: 40000,
    },
];
const manager = {
    id: 3,
    name: "Rahul Verma",
    department: "IT",
    salary: 60000,
    teamSize: 5,
};
function displayEmployee(employee) {
    console.log(`${employee.name} - ${employee.department} - ₹${employee.salary}`);
}
employees.forEach(displayEmployee);
displayEmployee(manager);
console.log("Manager Team Size:", manager.teamSize);
