import Tamplate from "./tamplate"
import Greating from "../../components/siakad/home/greating"
import JadwalKuliah from "../../components/siakad/home/jadwalKuliah"
import News from "../../components/siakad/home/news"
import Notification from "../../components/siakad/home/notication"
import Bill from "../../components/siakad/home/bil"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({ auth }) => {
    const [homeData, setHomeData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const bearer = `Bearer ${auth && auth.jwt}`
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
            setHomeData(respons)
        }
        getdata()
    }, [])

    if (!auth) {
        return (
            <Tamplate>
                <Greating />
                <div className='lg:flex w-full justify-between'>
                    <div className='lg:w-3/4 w-full mr-7'>
                        <JadwalKuliah />
                        <News />
                    </div>
                    <div className='lg:w-1/3 w-full mt-5'>
                        <Notification />
                        <Bill />
                    </div>
                </div>
            </Tamplate>
        )
    }
}
export default Home