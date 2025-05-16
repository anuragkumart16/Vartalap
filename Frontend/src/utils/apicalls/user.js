const url = import.meta.env.VITE_URL
async function registerUser(email, username, password) {
    try {
        const response = await fetch(`${url}/api/v1/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, username, password })
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function login(username, email, password) {
    try {
        const response = await fetch(`${url}/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ username, email, password })
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

async function resetPassword(email, username) {

    try {
        const response = await fetch(`${url}/api/v1/user/resetpassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, username })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function logout() {
    try {
        const response = await fetch(`${url}/api/user/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Credentials': 'include'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function verifyOTP(otp) {
    try {
        const response = await fetch(`${url}/api/v1/user/verifyotp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ otp })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}


async function updatePassword(password) {
    try {
        const response = await fetch(`${url}/api/v1/user/updatepassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ password })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}


async function verifyAuth() {
    try {
        const response = await fetch(`${url}/api/v1/user/verifyauth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

export { registerUser, login, resetPassword, logout, verifyOTP, updatePassword, verifyAuth }