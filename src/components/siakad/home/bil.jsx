const Bill = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg grid grid-cols-3 mt-7 rounded-2xl p-5">
                <h1 className="text-gray-600 dark:text-white font-bold col-span-2">TAGIHAN KEUANGAN</h1>
            <div className='flex flex-col justify-center bg-blue-500 text-white rounded font-bold h-5 px-1 text-xs'>
                <p className="text-center">VIEW ALL</p>
            </div>
            <div className="col-span-3">
                <p className="text-xl text-gray-600 dark:text-white font-bold mt-4"><span className="text-gray-400">Rp</span> 0</p>
                <p className="text-gray-400 dark:text-white font-bold -mt-1"><span className="font-normal">VA:</span> 55082021018</p>
                <p className="text-cyan-500 -mt-1">Panduan Pembayaran</p>
            </div>
        </div>
    )
}
export default Bill