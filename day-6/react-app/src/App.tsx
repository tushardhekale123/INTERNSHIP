import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import { useEmployees } from "./useEmployees";
import type { Employee } from "./useEmployees";

function App() {
  const { employees, setEmployees, loading, error } = useEmployees();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const [name, setName] = useState("");
  const [newDepartment, setNewDepartment] = useState("IT");
  const [salary, setSalary] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  const averageSalary =
    employees.length > 0 ? totalSalary / employees.length : 0;

  const filteredEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (employee) =>
        department === "All" || employee.department === department
    )
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.salary - b.salary;
      if (sortOrder === "high-low") return b.salary - a.salary;
      return a.id - b.id;
    });

  function resetForm() {
    setName("");
    setNewDepartment("IT");
    setSalary("");
    setEditingId(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const employeeName = name.trim();
    const employeeSalary = Number(salary);

    if (
      !employeeName ||
      !salary ||
      !Number.isFinite(employeeSalary) ||
      employeeSalary <= 0
    ) {
      alert("Please enter a valid name and salary greater than zero.");
      return;
    }

    if (editingId !== null) {
      setEmployees((previous) =>
        previous.map((employee) =>
          employee.id === editingId
            ? {
                ...employee,
                name: employeeName,
                department: newDepartment,
                salary: employeeSalary,
              }
            : employee
        )
      );
    } else {
      const newEmployee: Employee = {
        id:
          employees.length > 0
            ? Math.max(...employees.map((employee) => employee.id)) + 1
            : 1,
        name: employeeName,
        department: newDepartment,
        salary: employeeSalary,
      };

      setEmployees((previous) => [...previous, newEmployee]);
    }

    resetForm();
  }

  function handleEdit(employee: Employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setNewDepartment(employee.department);
    setSalary(String(employee.salary));

    document
      .getElementById("employee-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function handleDelete(id: number) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((previous) =>
        previous.filter((employee) => employee.id !== id)
      );

      if (editingId === id) {
        resetForm();
      }
    }
  }

  return (
    <main className="dashboard">
      <header className="page-header">
        <h1>Employee Management Dashboard</h1>
        <p>Manage your employees, departments, and salaries.</p>
      </header>

      {loading && (
        <p className="status-message">Loading employee data from API...</p>
      )}

      {error && <p className="error-message">{error}</p>}

      <section className="stats">
        <article className="card">
          <h3>Total Employees</h3>
          <h2>{employees.length}</h2>
        </article>

        <article className="card">
          <h3>Total Salary</h3>
          <h2>₹{totalSalary.toLocaleString("en-IN")}</h2>
        </article>

        <article className="card">
          <h3>Average Salary</h3>
          <h2>₹{Math.round(averageSalary).toLocaleString("en-IN")}</h2>
        </article>

        <article className="card">
          <h3>Departments</h3>
          <h2>
            {new Set(employees.map((employee) => employee.department)).size}
          </h2>
        </article>
      </section>

      <section className="panel">
        <h2>Employee Records</h2>

        <div className="controls">
          <input
            type="text"
            placeholder="Search employee by name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="none">Default Order</option>
            <option value="low-high">Salary: Low to High</option>
            <option value="high-low">Salary: High to Low</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>
                    <span className="badge">{employee.department}</span>
                  </td>
                  <td>₹{employee.salary.toLocaleString("en-IN")}</td>
                  <td>
                    <div className="actions">
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(employee)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan={5} className="empty-message">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel" id="employee-form">
        <h2>{editingId !== null ? "Edit Employee" : "Add New Employee"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="employee-name">Employee Name</label>
              <input
                id="employee-name"
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="employee-department">Department</label>
              <select
                id="employee-department"
                value={newDepartment}
                onChange={(event) => setNewDepartment(event.target.value)}
              >
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="employee-salary">Salary (₹)</label>
              <input
                id="employee-salary"
                type="number"
                min="1"
                step="1"
                placeholder="Enter salary"
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">
              {editingId !== null ? "Update Employee" : "Add Employee"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="cancel-button"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <footer>
        Day 6 | React + TypeScript Employee Dashboard
      </footer>
    </main>
  );
}

export default App;