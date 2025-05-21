const url = import.meta.env.VITE_URL;
export async function getMembers(parameter) {
    try {
        const response = await fetch(`${url}/api/v1/member`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ parameter }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
