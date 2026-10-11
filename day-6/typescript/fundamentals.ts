// Primitive Types
let employeeName: string = "Aarav Sharma";
let employeeAge: number = 25;
let isActive: boolean = true;

console.log("Name:", employeeName);
console.log("Age:", employeeAge);
console.log("Active:", isActive);

// Arrays
let departments: string[] = ["IT", "HR", "Finance"];

console.log("Departments:", departments);

// Functions
function calculateBonus(salary: number): number {
  return salary * 0.1;
}

console.log("Bonus:", calculateBonus(35000));

// Union Type
let employeeId: number | string = 101;

console.log("Employee ID:", employeeId);

employeeId = "EMP-101";

console.log("Updated Employee ID:", employeeId);