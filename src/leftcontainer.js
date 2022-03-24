import NewsContent from './newscontent.js'
const LeftContainer = () => {
    return(
        <div className='leftContainer'>
            <div className='white'>
                <img src='logo-w.webp' height='50px' />
                <div className="newsContainer">
                    <h1>Berita dan Informasi</h1>
                    <NewsContent />
                </div>
            </div>
        </div>
    )
}
export default LeftContainer