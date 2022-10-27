import weeknum from "../../../controller/dateMethod/weeknum"
const Greating = () => {
    const date = new Date()
    const tahun = date.getFullYear()
    return(
        <div className='flex shadow-lg w-full items-center h-32 bg-white dark:bg-gray-800 rounded-2xl mt-16 px-3 lg:px-0'>
            <img src='img/istockphoto-1182596507-170x170.jpg' className='h-20' />
            <div className='ml-3 text-gray-600 dark:text-white'>
                <h1 className='lg:text-2xl md:text-xl text-lg font-medium text-italic'>hai, Muhamad Zulfikar (2021018)</h1>
                <h2 className="lg:text-xl md:text-lg text-base">Saat ini kamu berada di semester <span className='font-bold'>{`${tahun}/${tahun+1}`} (minggu {weeknum()})</span></h2>
                <h2 className="lg:text-xl md:text-lg text-base">Tetap semangat belajar ya</h2>
            </div>
        </div>
    )
}
export default Greating