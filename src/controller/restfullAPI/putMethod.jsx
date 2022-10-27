import { useState } from "react"
const PutMethod = (api, token, json) => {
    const [put, setPut] = useState()
    const bearer = `Bearer ${token}`
    async function putdata() {
        const request = await fetch(
            api, {
            method: 'PUT',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(json)
        }
        )

        const respons = await request.json()
        setPut(respons)
    }
    putdata()
    return put
}

export default PutMethod