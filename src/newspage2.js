import NewsContent from './newscontentpage2'
const News = () =>{
    return(
        <div className='w-full bg-white mt-5 rounded-2xl p-7'>
            <div className='flex justify-between mb-4'>
                <h1 className='text-xl font-bold text-gray-700'>BERITA & INFORMASI</h1>
                <p className='bg-blue-500 text-white rounded font-bold h-5 text-xs'>VIEW ALL</p>
            </div>
            <NewsContent />
        </div>
    )
}
export default News