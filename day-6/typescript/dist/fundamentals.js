"use strict";
// Primitive Types
let employeeName = "Aarav Sharma";
let employeeAge = 25;
let isActive = true;
console.log("Name:", employeeName);
console.log("Age:", employeeAge);
console.log("Active:", isActive);
// Arrays
let departments = ["IT", "HR", "Finance"];
console.log("Departments:", departments);
// Functions
function calculateBonus(salary) {
    return salary * 0.1;
}
console.log("Bonus:", calculateBonus(35000));
// Union Type
let employeeId = 101;
console.log("Employee ID:", employeeId);
employeeId = "EMP-101";
console.log("Updated Employee ID:", employeeId);
