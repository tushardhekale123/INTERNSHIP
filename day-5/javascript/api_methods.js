const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getEmployees() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`GET failed: ${response.status}`);
        }

        const data = await response.json();

        console.log("GET result:", data.slice(0, 5));
    } catch (error) {
        console.error("GET error:", error.message);
    }
}

async function addEmployee() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Neha Patil",
                username: "neha",
                email: "neha@example.com"
            })
        });

        if (!response.ok) {
            throw new Error(`POST failed: ${response.status}`);
        }

        console.log("POST result:", await response.json());
    } catch (error) {
        console.error("POST error:", error.message);
    }
}

async function updateEmployee() {
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                name: "Aarav Updated",
                username: "aarav",
                email: "aarav@example.com"
            })
        });

        if (!response.ok) {
            throw new Error(`PUT failed: ${response.status}`);
        }

        console.log("PUT result:", await response.json());
    } catch (error) {
        console.error("PUT error:", error.message);
    }
}

async function deleteEmployee() {
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`DELETE failed: ${response.status}`);
        }

        console.log("DELETE result:", response.status);
    } catch (error) {
        console.error("DELETE error:", error.message);
    }
}

async function main() {
    await getEmployees();
    await addEmployee();
    await updateEmployee();
    await deleteEmployee();
}

main();