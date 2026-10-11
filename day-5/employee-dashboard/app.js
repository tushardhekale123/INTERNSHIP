"use strict";

const DATA_URL = "./employees.json";

let employees = [];
let editingId = null;

const table = document.getElementById("employeeTable");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const dialog = document.getElementById("employeeDialog");
const form = document.getElementById("employeeForm");
const message = document.getElementById("message");

function showMessage(text) {
    message.textContent = text;
}

function formatSalary(salary) {
    return `₹${salary.toLocaleString("en-IN")}`;
}

// GET: Load employee records from JSON
async function loadEmployees() {
    showMessage("Loading employees...");

    try {
        const response = await fetch(DATA_URL);

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Employee data must be a JSON array.");
        }

        employees = data.map(employee => ({
            id: Number(employee.id),
            name: String(employee.name),
            department: String(employee.department),
            salary: Number(employee.salary)
        }));

        if (employees.some(employee =>
            !Number.isFinite(employee.id) ||
            !employee.name.trim() ||
            !Number.isFinite(employee.salary) ||
            employee.salary < 0
        )) {
            throw new Error("Some employee records are invalid.");
        }

        showMessage("");
        renderEmployees();
    } catch (error) {
        console.error("Employee loading error:", error);

        employees = [];
        renderEmployees();

        showMessage(
            "Data load nahi hua. Live Server se index.html kholo " +
            "aur employees.json ka path check karo."
        );
    }
}

function updateSummary() {
    document.getElementById("totalEmployees").textContent =
        employees.length;

    const departments = new Set(
        employees.map(employee => employee.department)
    );

    document.getElementById("totalDepartments").textContent =
        departments.size;

    const totalSalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    document.getElementById("totalSalary").textContent =
        formatSalary(totalSalary);
}

function getVisibleEmployees() {
    const search = searchInput.value.trim().toLowerCase();
    const department = departmentFilter.value;

    const result = employees.filter(employee => {
        const matchesName = employee.name.toLowerCase().includes(search);
        const matchesDepartment =
            department === "All" || employee.department === department;

        return matchesName && matchesDepartment;
    });

    if (sortSelect.value === "salaryHigh") {
        result.sort((a, b) => b.salary - a.salary);
    } else if (sortSelect.value === "salaryLow") {
        result.sort((a, b) => a.salary - b.salary);
    } else {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}

function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
}

function renderEmployees() {
    table.replaceChildren();

    const visibleEmployees = getVisibleEmployees();

    document.getElementById("recordCount").textContent =
        `${visibleEmployees.length} record(s)`;

    visibleEmployees.forEach(employee => {
        const row = document.createElement("tr");

        row.append(
            createCell(employee.id),
            createCell(employee.name),
            createCell(employee.department),
            createCell(formatSalary(employee.salary))
        );

        const actions = document.createElement("td");
        actions.className = "actions";

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.className = "details-btn";
        detailsButton.addEventListener("click", () => {
            alert(
                `Employee ID: ${employee.id}\n` +
                `Name: ${employee.name}\n` +
                `Department: ${employee.department}\n` +
                `Monthly Salary: ${formatSalary(employee.salary)}`
            );
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            openEditForm(employee.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => {
            deleteEmployee(employee.id);
        });

        actions.append(detailsButton, editButton, deleteButton);
        row.appendChild(actions);
        table.appendChild(row);
    });

    updateSummary();
}

function openAddForm() {
    editingId = null;
    form.reset();

    document.getElementById("formTitle").textContent = "Add Employee";
    dialog.showModal();
}

function openEditForm(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) {
        showMessage("Employee not found.");
        return;
    }

    editingId = id;

    document.getElementById("formTitle").textContent = "Edit Employee";
    document.getElementById("employeeName").value = employee.name;
    document.getElementById("employeeDepartment").value =
        employee.department;
    document.getElementById("employeeSalary").value = employee.salary;

    dialog.showModal();
}

function saveEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("employeeName").value.trim();
    const department =
        document.getElementById("employeeDepartment").value;
    const salary =
        Number(document.getElementById("employeeSalary").value);

    if (!name || !Number.isFinite(salary) || salary < 0) {
        showMessage("Please enter valid employee details.");
        return;
    }

    if (editingId !== null) {
        employees = employees.map(employee =>
            employee.id === editingId
                ? { ...employee, name, department, salary }
                : employee
        );

        showMessage("Employee updated successfully.");
    } else {
        const newId = employees.length
            ? Math.max(...employees.map(employee => employee.id)) + 1
            : 101;

        employees.push({
            id: newId,
            name,
            department,
            salary
        });

        showMessage("Employee added successfully.");
    }

    dialog.close();
    renderEmployees();
}

function deleteEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) {
        showMessage("Employee not found.");
        return;
    }

    const confirmed = confirm(`Delete ${employee.name}?`);

    if (!confirmed) {
        return;
    }

    employees = employees.filter(item => item.id !== id);

    showMessage("Employee deleted successfully.");
    renderEmployees();
}

document.getElementById("addEmployeeBtn")
    .addEventListener("click", openAddForm);

document.getElementById("cancelBtn")
    .addEventListener("click", () => dialog.close());

form.addEventListener("submit", saveEmployee);

searchInput.addEventListener("input", renderEmployees);
departmentFilter.addEventListener("change", renderEmployees);
sortSelect.addEventListener("change", renderEmployees);

loadEmployees();