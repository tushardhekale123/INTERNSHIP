// 1. Type Alias
type Department = "IT" | "HR" | "Finance" | "Marketing";

let selectedDepartment: Department = "IT";
console.log("Department:", selectedDepartment);

// 2. Enums
enum EmployeeStatus {
  Active = "Active",
  Inactive = "Inactive",
  OnLeave = "On Leave",
}

const employeeStatus: EmployeeStatus = EmployeeStatus.Active;
console.log("Employee Status:", employeeStatus);

// 3. Generics
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

console.log("First Number:", getFirstItem<number>([10, 20, 30]));
console.log(
  "First Name:",
  getFirstItem<string>(["Aarav", "Priya", "Rahul"])
);

// 4. Classes
class Employee {
  constructor(
    public name: string,
    public salary: number
  ) {}

  displayDetails(): void {
    console.log(`${this.name} earns ₹${this.salary}`);
  }
}

const employee = new Employee("Sneha Joshi", 45000);
employee.displayDetails();

// 5. Type Narrowing
function displayId(id: number | string): void {
  if (typeof id === "number") {
    console.log("Numeric ID:", id);
  } else {
    console.log("Text ID:", id.toUpperCase());
  }
}

displayId(101);
displayId("emp-102");

// 6. Type Guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const input: unknown = "TypeScript";

if (isString(input)) {
  console.log("Uppercase:", input.toUpperCase());
}

// 7. Optional Properties
interface EmployeeDetails {
  name: string;
  department?: string;
}

const details: EmployeeDetails = {
  name: "Rahul Verma",
};

console.log("Employee Details:", details);