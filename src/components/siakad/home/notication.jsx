const Notification = () => {
    return (
        <div className='w-full shadow-lg bg-white dark:bg-gray-800 h-72 rounded-2xl p-5'>
            {/* notification header start */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <h1 className='text-gray-600 font-bold'>NOTIFIKASI</h1>
                    <div className='h-5 bg-green-400 w-5 rounded-2xl ml-1 text-center text-white text-sm'>4</div>
                </div>
                <div className='flex flex-col justify-center bg-blue-500 text-white rounded font-bold h-5 px-1 text-xs'>
                    <p className="text-center">VIEW ALL</p>
                </div>
            </div>
            {/* notification header end */}

            {/* notification content start */}
            <div className='overflow-auto h-52 p-2 mt-2'>
                <div className='mb-5 text-gray-600'>
                    <div className='flex'>
                        <h1 className='text-lg font-medium w-48'>Notification</h1>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                    </div>
                    <p className='text-sm font-medium text-gray-500'>time</p>
                </div>
            </div>
            {/* notification content end */}
        </div>
    )
}
export default Notification