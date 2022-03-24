const Month = () => {
    const d = new Date();
    return(
        d.getMonth() === 0 ? 'Januari' :
        d.getMonth() === 1 ? 'Februari' :
        d.getMonth() === 2 ? 'Maret' :
        d.getMonth() === 3 ? 'April' :
        d.getMonth() === 4 ? 'Mei' :
        d.getMonth() === 5 ? 'Juni' :
        d.getMonth() === 6 ? 'Juli' :
        d.getMonth() === 7 ? 'Agustus' :
        d.getMonth() === 8 ? 'September' :
        d.getMonth() === 9 ? 'Oktober' :
        d.getMonth() === 10 ? 'November' :
        d.getMonth() === 11 ? 'Desember' :
        'Invalid Day'
    )
}
export default Month