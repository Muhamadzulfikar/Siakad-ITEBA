import Today from '../../../controller/dateMethod/today.json'
const JadwalKuliah = () => {
    const d = new Date()
    const day = d.getDay()
    const date = d.getDate()
    const month = d.getMonth()
    const year = d.getFullYear()
    const today = `${Today.nameday[day].day}, ${date} ${Today.nameMonth[month].month} ${year}`

    return(
        <div className='w-full shadow-lg bg-white dark:bg-gray-800 mt-5 rounded-2xl p-7 text-gray-700 dark:text-white'>
        <div className='flex lg:flex-row font-bold flex-col text-center lg:text-left'>
        <p>JADWAL KULIAH HARI INI </p>
        <p> ({today})</p>
        </div>
        {/* roaster Start */}
        <div className='mt-5 lg:ml-7 mb-8'>

            <div className='flex'>
                <p className='font-bold text-lg'>time</p>
                <img src='img/1486486303-alert-bell-notification-education-christmas-bell-church-bell-ring_81235.svg' className='h-6 ml-1' />
            </div>

            <h1 className='font-bold text-lg mt-2'>matkul</h1>
            <p className=' mt-4'>proid</p>

            <div className='flex items-center mt-4'>
                <img src='img/enter_icon-icons.com_48306.png' className='h-5' />
                <p className='mx-2'>room |</p>
                <img src='img/link_icon-icons.com_70055.png' className='h-4' />
                <a className='text-blue-700 dark:text-cyan-500 ml-2'>Akses E-Learning</a>
            </div>
        </div>
        {/* roaster end */}
    </div>
    )
}
export default JadwalKuliah