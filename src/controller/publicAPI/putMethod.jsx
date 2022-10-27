import { useState } from "react"
const PutMethod = (api, json) => {
    const [put, setPut] = useState()
    async function putdata() {
        const request = await fetch(
            api, {
            method: 'PUT',
            headers: {
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