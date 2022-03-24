const Greeting = () => {
    return(
        <div className='flex w-full items-center h-32 bg-white rounded-2xl mt-16'>
            <img src='istockphoto-1182596507-170x170.jpg' className='h-20' />
            <div className='ml-3 text-gray-600'>
                <h1 className='text-2xl font-medium text-italic'>hai, Muhamad Zulfikar (2021018)</h1>
                <h2>Saat ini kamu berada di semester <span className='font-bold'>2021/2022 ganjil (minggu 11)</span></h2>
                <h2>Tetap semangat belajar ya</h2>
            </div>
        </div>
    )
}
export default Greeting