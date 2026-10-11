import { useEffect, useState } from "react";

export interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

interface ApiUser {
  id: number;
  name: string;
}

const initialEmployees: Employee[] = [
  { id: 1, name: "Aarav Sharma", department: "IT", salary: 35000 },
  { id: 2, name: "Priya Patil", department: "HR", salary: 28000 },
  { id: 3, name: "Rahul Verma", department: "IT", salary: 45000 },
  { id: 4, name: "Sneha Joshi", department: "Finance", salary: 40000 },
  { id: 5, name: "Kabir Khan", department: "Marketing", salary: 32000 },
];

export function useEmployees() {
  const [employees, setEmployees] =
    useState<Employee[]>(initialEmployees);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Unable to load API data.");
        }

        const users: ApiUser[] = await response.json();

        const apiEmployees: Employee[] = users.map((user, index) => ({
          id: user.id,
          name: user.name,
          department: ["IT", "HR", "Finance", "Marketing"][index % 4],
          salary: 25000 + index * 5000,
        }));

        setEmployees(apiEmployees);
      } catch {
        setError("API unavailable. Showing sample employee data.");
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  return { employees, setEmployees, loading, error };
}