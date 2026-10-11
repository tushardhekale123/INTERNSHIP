"use strict";
let selectedDepartment = "IT";
console.log("Department:", selectedDepartment);
// 2. Enums
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus["Active"] = "Active";
    EmployeeStatus["Inactive"] = "Inactive";
    EmployeeStatus["OnLeave"] = "On Leave";
})(EmployeeStatus || (EmployeeStatus = {}));
const employeeStatus = EmployeeStatus.Active;
console.log("Employee Status:", employeeStatus);
// 3. Generics
function getFirstItem(items) {
    return items[0];
}
console.log("First Number:", getFirstItem([10, 20, 30]));
console.log("First Name:", getFirstItem(["Aarav", "Priya", "Rahul"]));
// 4. Classes
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`${this.name} earns ₹${this.salary}`);
    }
}
const employee = new Employee("Sneha Joshi", 45000);
employee.displayDetails();
// 5. Type Narrowing
function displayId(id) {
    if (typeof id === "number") {
        console.log("Numeric ID:", id);
    }
    else {
        console.log("Text ID:", id.toUpperCase());
    }
}
displayId(101);
displayId("emp-102");
// 6. Type Guard
function isString(value) {
    return typeof value === "string";
}
const input = "TypeScript";
if (isString(input)) {
    console.log("Uppercase:", input.toUpperCase());
}
const details = {
    name: "Rahul Verma",
};
console.log("Employee Details:", details);
