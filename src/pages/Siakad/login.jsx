import './index.css'
import mockData from './mockData.json'
const Login = ({submit, username, password}) => {
    return (
        <div className='container-login'>
            <div className='leftContainer'>
                <div>
                    <img src='logo-w.webp' height='50px' />
                    <div className="newsContainer">
                        <h1>Berita dan Informasi</h1>
                        {mockData.news.map((news) => (
                            <div key={news.id} className="newsContent">
                                <h1><a href='#'>{news.title}</a></h1>
                                <p>{news.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='rightContainer'>
                <form method="POST" onSubmit={submit}  className='loginContainer'>
                    <h1>Login</h1>
                    <input onChange={username} type="text" placeholder="NIM / NIP/ Email"  />
                    <input onChange={password} type="password" placeholder='Password' />
                    <button type="submit">Masuk</button>
                </form>
            </div>
        </div>
    )
}
export default Login