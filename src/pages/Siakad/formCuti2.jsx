import { useState } from "react"
import Tamplate from "./tamplate"
import { useNavigate } from "react-router-dom"

const FormCuti2 = ({ auth }) => {
    const date = new Date()
    const tahun = date.getFullYear()
    const navigate = useNavigate()

    const semester = [
        { value: `${tahun}/${tahun + 1} Ganjil` },
        { value: `${tahun}/${tahun + 1} Genap` },
        { value: `${tahun + 1}/${tahun + 2} Ganjil` },
        { value: `${tahun + 1}/${tahun + 2} Genap` },
    ]

    const [semesterStart, setSemesterStart] = useState("")
    const [semesterEnd, setSemesterEnd] = useState("")
    const [reason, setReason] = useState("")

    const handlesemester = (e) => {
        const i = parseInt(e.target.value)

        setSemesterStart(semester[i].value)
        setSemesterEnd(semester[i+1].value)
    }

    const handleSubmit = () => {
        const bearer = `Bearer ${auth}`
        async function postdata() {
            await fetch(
                "https://localhost:1337/api/restaurants", {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(
                    {
                        namaMakanan: semesterEnd
                    }
                )
            }
            )
        }
        postdata()

        navigate("/cuti")
    }
    return (
        <Tamplate>
            <section className="cuti-form mt-5 dark:text-white text-lg">
                <h1 className="text-2xl font-medium ml-4">Form Pengajuan Cuti Mahasiswa</h1>

                <form onSubmit={handleSubmit} className="dark:bg-gray-800 rounded-2xl p-4 flex flex-col gap-y-4 mt-5" action="">
                    <div className="flex flex-col gap-y-2">
                        <label className="ml-2" htmlFor="mulaicuti">Semester Mulai Cuti</label>
                        <select onChange={handlesemester} className="w-full dark:bg-gray-700 p-2 rounded-2xl" name="semester" id="">
                            <option value="pilih Semester">Pilih Semester</option>
                            <option value={1}>{`${tahun}/${tahun + 1} Ganjil`}</option>
                            <option value={2}>{`${tahun}/${tahun + 1} Genap`}</option>
                            <option value={3}>{`${tahun + 1}/${tahun + 2} Ganjil`}</option>
                            <option value={4}>{`${tahun + 1}/${tahun + 2} Genap`}</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="ml-2" htmlFor="mulaicuti">Semester Aktif Kembali</label>
                        <input className="w-full dark:bg-gray-700 p-2 rounded-2xl" type="text" value={semesterEnd} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="ml-2" htmlFor="mulaicuti">Alasan Cuti</label>
                        <textarea onChange={(e) => { setReason(e.target.value) }} className="w-full dark:bg-gray-700 p-2 rounded-2xl"></textarea>
                    </div>
                    <div>
                        <h3 className="ml-3">Biaya cuti persemester sebesar Rp.1,500,000.</h3>
                    </div>
                    <div className="flex items-center gap-x-4 ml-2 mt-4">
                        <button className="btn bg-cyan-600 rounded-2xl" type="submit">Ajukan Cuti</button>
                        <button className="btn bg-gray-700 rounded-2xl" type="reset">Cancel</button>
                    </div>
                </form>
            </section>
        </Tamplate>
    )
}

export default FormCuti2