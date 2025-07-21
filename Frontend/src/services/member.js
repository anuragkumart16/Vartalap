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

export async function getFriendRequests() {
    try {
        const response = await fetch(`${url}/api/v1/member/requests`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function acceptFriendRequest(requestId) {
    try {
        const response = await fetch(`${url}/api/v1/member/accept`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ requestId }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function rejectFriendRequest(requestId) {
    try {
        const response = await fetch(`${url}/api/v1/member/reject`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ requestId }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getFriends() {
    try {
        const response = await fetch(`${url}/api/v1/member/friends`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getMessagesWithUser(otherUserId) {
    try {
        const response = await fetch(`${url}/api/v1/member/messages/${otherUserId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
