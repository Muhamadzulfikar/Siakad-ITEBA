const NewsContent = () => {
    const data = [{id:1, news:'Kalender Akademik TA 2021/2022', date:'Senin, 23 Agustus 2021'},
                  {id:2, news:'Surat Edaran Uang kuliah semester ganjil TA 2021/2022', date:'Kamis, 12 Agustus 2021'},
                  {id:3, news:'Selamat Datang di Sistem Akademik ITEBA', date:'Kamis, 24 Oktober 2019'}]
    return(
        data.map(function(data){
            return(
                <div key={data.id} className='text-blue-600 font-medium mb-4'>
                    <h1>{data.news}</h1>
                    <div className='flex text-sm items-center'>
                        <p className='font-bold text-blue-600'>Pengumuman</p>
                        <img src='wondicon-ui-free-calender_111212.png' className='h-4' />
                        <p className='text-gray-600'>{data.date}</p>
                    </div>
                </div>
            )
        })
    )
}
export default NewsContent