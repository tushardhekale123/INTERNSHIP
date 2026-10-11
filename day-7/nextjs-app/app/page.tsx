"use client";

import { useState } from "react";
import "./globals.css";

type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

const initialEmployees: Employee[] = [
  { id: 1, name: "Aarav Sharma", department: "IT", salary: 35000 },
  { id: 2, name: "Priya Patil", department: "HR", salary: 40000 },
  { id: 3, name: "Rahul Verma", department: "IT", salary: 45000 },
  { id: 4, name: "Sneha Joshi", department: "Finance", salary: 38000 },
  { id: 5, name: "Kabir Khan", department: "Marketing", salary: 32000 },
];

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("IT");
  const [editingId, setEditingId] = useState<number | null>(null);

  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (employee) =>
        department === "All" || employee.department === department
    );

  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  const averageSalary = employees.length
    ? totalSalary / employees.length
    : 0;

  function saveEmployee(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || Number(salary) <= 0) {
      alert("Please enter a valid name and salary.");
      return;
    }

    if (editingId !== null) {
      setEmployees((current) =>
        current.map((employee) =>
          employee.id === editingId
            ? {
                ...employee,
                name: name.trim(),
                salary: Number(salary),
                department: selectedDepartment,
              }
            : employee
        )
      );
    } else {
      const newEmployee: Employee = {
        id: Date.now(),
        name: name.trim(),
        department: selectedDepartment,
        salary: Number(salary),
      };

      setEmployees((current) => [...current, newEmployee]);
    }

    resetForm();
  }

  function editEmployee(employee: Employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setSalary(String(employee.salary));
    setSelectedDepartment(employee.department);
  }

  function deleteEmployee(id: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees((current) =>
        current.filter((employee) => employee.id !== id)
      );
    }
  }

  function resetForm() {
    setEditingId(null);
    setName("");
    setSalary("");
    setSelectedDepartment("IT");
  }

  function sortBySalary() {
    setEmployees((current) =>
      [...current].sort((a, b) => a.salary - b.salary)
    );
  }

  return (
    <main className="dashboard">
      <header className="header">
        <div>
          <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
          <h1>Employee Dashboard</h1>
          <p>Manage your team from one place.</p>
        </div>
        <span className="badge">Day 7 · Next.js</span>
      </header>

      <section className="stats">
        <article className="stat-card">
          <span>Total Employees</span>
          <h2>{employees.length}</h2>
        </article>

        <article className="stat-card">
          <span>Average Salary</span>
          <h2>₹{Math.round(averageSalary).toLocaleString("en-IN")}</h2>
        </article>

        <article className="stat-card">
          <span>Departments</span>
          <h2>{new Set(employees.map((e) => e.department)).size}</h2>
        </article>
      </section>

      <section className="content">
        <div className="panel">
          <h2>{editingId !== null ? "Edit Employee" : "Add Employee"}</h2>

          <form onSubmit={saveEmployee}>
            <label htmlFor="name">Employee Name</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter employee name"
              required
            />

            <label htmlFor="salary">Salary (₹)</label>
            <input
              id="salary"
              type="number"
              min="1"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
              placeholder="Enter salary"
              required
            />

            <label htmlFor="department">Department</label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(event) => setSelectedDepartment(event.target.value)}
            >
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>

            <button className="primary" type="submit">
              {editingId !== null ? "Update Employee" : "Add Employee"}
            </button>

            {editingId !== null && (
              <button className="secondary" type="button" onClick={resetForm}>
                Cancel
              </button>
            )}
          </form>
        </div>

        <div className="panel employee-panel">
          <div className="list-header">
            <div>
              <h2>Employees</h2>
              <p>{filteredEmployees.length} employees found</p>
            </div>

            <button className="secondary" onClick={sortBySalary}>
              Sort by Salary
            </button>
          </div>

          <div className="filters">
            <input
              aria-label="Search employees"
              placeholder="Search by name..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              aria-label="Filter department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              <option value="All">All Departments</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>
                      <span className="department">
                        {employee.department}
                      </span>
                    </td>
                    <td>₹{employee.salary.toLocaleString("en-IN")}</td>
                    <td className="actions">
                      <button
                        className="edit"
                        onClick={() => editEmployee(employee)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteEmployee(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredEmployees.length === 0 && (
                  <tr>
                    <td colSpan={4}>No employees found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer>Day 7 Project · Next.js Employee Management</footer>
    </main>
  );
}