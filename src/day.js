const Day = () => {
    const d = new Date();
    return(
        d.getDay() === 0 ? 'Minggu' :
        d.getDay() === 1 ? 'Senin' :
        d.getDay() === 2 ? 'Selasa' :
        d.getDay() === 3 ? 'Rabu' :
        d.getDay() === 4 ? 'kamis' :
        d.getDay() === 5 ? 'Jumat' :
        d.getDay() === 6 ? 'Sabtu' :
        'Invalid Day'
    )
}
export default Day