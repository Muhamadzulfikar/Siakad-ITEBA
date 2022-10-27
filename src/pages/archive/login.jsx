import Home from "./home";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [auth, setAuth] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
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

            navigate("/home")
    }

    return (
        <>
            <form action="/about" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => {setUsername(e.target.value)}} />
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} />
                <button type="submit">Sumbit</button>
            </form>

            <div style={{"display":"none"}}>
            <Home auth={auth} />
            </div>
        </>
    )
}
export default Login