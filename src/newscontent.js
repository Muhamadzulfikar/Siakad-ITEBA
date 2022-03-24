const NewsContent = () => {
    const data = [{id: 1, title:'Perjanjian Kerja Sama PT. Galaksi Investasi Harapan Bersama Institut Teknologi Batam', date:'Senin, 6 Desember 2021'},
                  {id: 2, title:'Perjanjian Kerja Sama ITEBA & BTP Bagi Pengembangan Kopetensi Pegawai Imigrasi dan Dukungan Tri Dharma Perguruan Tinggi 2021', date:'Senin, 6 Desember 2021'},
                  {id: 3, title:'Pengumuman Sidang Senat Terbuka 2021', date:'Senin, 6 September 2021'}
                ]
    return(
        data.map(function(data){
            return(
                <div key={data.id} className="newsContent">
                    <h1><a href='#' key={data.id}>{data.title}</a></h1>
                    <p>{data.date}</p>
                </div>
            ) 
        })
    )
}

export default NewsContent