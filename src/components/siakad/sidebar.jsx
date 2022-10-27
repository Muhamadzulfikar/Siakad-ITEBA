import { Link } from 'react-router-dom'
import mockData from './mockData.json'
const Sidebar = ({id}) => {
    return (
        <div className='lg:w-72 lg:block hidden lg:static fixed top-0 bottom-0 bg-gray-800 opacity-90 text-white lg:py-8 py-24 text-md px-7' id={id}>
            <div>
                {mockData.sidebar.map((menu) => (
                    <div key={menu.id} className='mb-7 hover:bg-gray-700 w-36 text-left rounded'>
                        <Link to={`/${menu.id}`}>{menu.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sidebar