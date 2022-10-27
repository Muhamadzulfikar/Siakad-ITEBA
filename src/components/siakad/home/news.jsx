const News = () => {
    return (
        <div className='w-full shadow-lg bg-white dark:bg-gray-800 mt-5 rounded-2xl p-7' >
            <div className='flex justify-between mb-4'>
                <h1 className='text-xl font-bold text-gray-700 dark:text-white'>BERITA & INFORMASI</h1>
                <div className='flex flex-col justify-center bg-blue-500 text-white rounded font-bold h-5 px-1 text-xs'>
                    <p className="text-center">VIEW ALL</p>
                </div>
            </div>
            <div className='text-blue-600 dark:text-cyan-600 font-medium mb-4'>
                <h1>judul berita</h1>
                <div className='flex text-sm items-center'>
                    <p className='font-bold text-blue-600 dark:text-cyan-600'>Pengumuman</p>
                    <img src='img/wondicon-ui-free-calender_111212.png' className='h-4' />
                    <p className='text-gray-600 dark:text-white'>tanggal</p>
                </div>
            </div>
        </div >
    )
}
export default News