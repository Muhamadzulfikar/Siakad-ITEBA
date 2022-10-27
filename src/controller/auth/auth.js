import { useState } from "react"
import Home from "../../pages/home"
const Auth = (username, password) => {
    const [auth, setAuth] = useState()
    if (username != null) {
        async function getAuth() {
            const request = await fetch(
                "http://localhost:1337/api/auth/local", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "identifier": username,
                    "password": password
                })
            }
            )
            const respons = await request.json()
            setAuth(respons)
        }
        getAuth()
    }

    return(
        <Home auth={auth} />
    )
}

export default Auth