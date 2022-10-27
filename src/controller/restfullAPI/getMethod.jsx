const GetMethod = (api, token) => {
    const bearer = `Bearer ${token}`
    async function getdata() {
        const request = await fetch(
            api, {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )

        const respons = await request.json()
    }
    getdata()
}

export default GetMethod