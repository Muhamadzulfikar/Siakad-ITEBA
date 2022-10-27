import { useEffect, useState } from "react"
const Home = ({ auth}) => {
    const [get, setGet] = useState()
    useEffect(() => {
        if (auth != null) {
            const bearer = `Bearer ${auth.jwt}`
            async function getdata() {
                const request = await fetch(
                    "http://localhost:1337/api/restaurants", {
                    method: 'GET',
                    headers: {
                        'Authorization': bearer,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
                )

                const respons = await request.json()
                setGet(respons)
            }
            getdata()
        }
    }, [])
    return (
        <section className="home">
            <h1>saya sedang belajar api</h1>
            {get && get.data.map((restaurant) => (
            <div key={restaurant.id}>
                    <p>{restaurant.attributes.namaMakanan}</p>
                </div>
            ))}
        </section>
    )
}
export default Home