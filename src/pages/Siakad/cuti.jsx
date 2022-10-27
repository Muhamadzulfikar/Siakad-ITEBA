import Tamplate from "./tamplate"
import MockData from "./mockData.json"
import { Link } from 'react-router-dom'
const Cuti = () => {
    return (
        <Tamplate>
            <div className="mt-10 dark:text-white px-5 lg:px-0 md:px-5">
                <h1 className="lg:text-2xl md:text-xl text-lg font-medium">Pengajuan Cuti Mahasiswa</h1>
                <Link to="/pengajuancuti">
                    <button className="btn bg-blue-700 mt-3">Tambah Pengajuan Cuti</button>
                </Link>

                {/* <div class="overflow-x-auto relative mt-5">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Semester Mulai Cuti
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Semester Aktif Kembali
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Alasan Cuti
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="py-4 px-6">
                                    Sliver
                                </td>
                                <td class="py-4 px-6">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td class="py-4 px-6">
                                    White
                                </td>
                                <td class="py-4 px-6">
                                    Laptop PC
                                </td>
                                <td class="py-4 px-6">
                                    $1999
                                </td>
                                <td class="py-4 px-6">
                                    $1999
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td class="py-4 px-6">
                                    Black
                                </td>
                                <td class="py-4 px-6">
                                    Accessories
                                </td>
                                <td class="py-4 px-6">
                                    $99
                                </td>
                                <td class="py-4 px-6">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

                <div className="lg:grid md:grid lg:grid-cols-5 md:grid-cols-5 flex flex-col justify-between lg:gap-3 gap-7 mt-7">
                    {MockData.cuti.map((mock) => (
                        <section className="cuti gap-y-3 grid">
                            <h1>{mock}</h1>
                            <section className="dark:bg-gray-700">
                                besok
                            </section>
                        </section>
                    ))}
                </div>

            </div>
        </Tamplate>
    )
}
export default Cuti