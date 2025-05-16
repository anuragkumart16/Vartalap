const url = import.meta.env.VITE_URL
async function healthCheck() {
    console.log(url)
    try {
        const response = await fetch(`${url}/api/v1/healthcheck`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export {healthCheck}