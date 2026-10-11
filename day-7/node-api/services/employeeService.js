const employees = require("../models/employeeModel");

let nextId = Math.max(...employees.map((e) => e.id)) + 1;

function getAllEmployees() {
  return employees;
}

function getEmployeeById(id) {
  return employees.find((employee) => employee.id === Number(id));
}

function createEmployee(data) {
  const employee = {
    id: nextId++,
    name: data.name.trim(),
    department: data.department.trim(),
    salary: Number(data.salary),
  };

  employees.push(employee);
  return employee;
}

function updateEmployee(id, data) {
  const employee = getEmployeeById(id);
  if (!employee) return null;

  employee.name = data.name.trim();
  employee.department = data.department.trim();
  employee.salary = Number(data.salary);

  return employee;
}

function deleteEmployee(id) {
  const index = employees.findIndex((e) => e.id === Number(id));

  if (index === -1) return false;

  employees.splice(index, 1);
  return true;
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};