interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

interface Manager extends Employee {
  teamSize: number;
}

const employees: Employee[] = [
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

const manager: Manager = {
  id: 3,
  name: "Rahul Verma",
  department: "IT",
  salary: 60000,
  teamSize: 5,
};

function displayEmployee(employee: Employee): void {
  console.log(
    `${employee.name} - ${employee.department} - ₹${employee.salary}`
  );
}

employees.forEach(displayEmployee);
displayEmployee(manager);

console.log("Manager Team Size:", manager.teamSize);