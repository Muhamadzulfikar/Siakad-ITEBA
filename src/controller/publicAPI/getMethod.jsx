import { useState } from "react"
import { useEffect } from "react"
const GetMethod = (api) => {
    const [get, setGet] = useState()
    useEffect(() => {
        async function getdata() {
            const request = await fetch(
                api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )

            const respons = await request.json()
            setGet(respons)
        }
        getdata()
    }, [])

    return get
}

export default GetMethod