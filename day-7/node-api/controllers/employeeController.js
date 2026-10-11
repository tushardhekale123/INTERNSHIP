const service = require("../services/employeeService");

function validateEmployee(data) {
  if (
    !data ||
    typeof data.name !== "string" ||
    !data.name.trim() ||
    typeof data.department !== "string" ||
    !data.department.trim() ||
    data.salary === undefined ||
    data.salary === null ||
    data.salary === "" ||
    !Number.isFinite(Number(data.salary)) ||
    Number(data.salary) < 0
  ) {
    return "Valid name, department and non-negative salary are required.";
  }

  return null;
}

exports.getAll = (req, res) => {
  res.json(service.getAllEmployees());
};

exports.getById = (req, res) => {
  const employee = service.getEmployeeById(req.params.id);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(employee);
};

exports.create = (req, res) => {
  const error = validateEmployee(req.body);

  if (error) {
    return res.status(400).json({ error });
  }

  const employee = service.createEmployee(req.body);
  res.status(201).json(employee);
};

exports.update = (req, res) => {
  const error = validateEmployee(req.body);

  if (error) {
    return res.status(400).json({ error });
  }

  const employee = service.updateEmployee(req.params.id, req.body);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(employee);
};

exports.remove = (req, res) => {
  const deleted = service.deleteEmployee(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json({ message: "Employee deleted successfully" });
};