import Navbar from '../../components/siakad/navbar'
import Sidebar from '../../components/siakad/sidebar'
import { Children } from "react"

const handleHidden = () => {
    const hiddenID = document.getElementById("hiddenID");
    hiddenID.classList.toggle("hidden")
}

const Tamplate = ({ children}) => {
    return (
        <div>
            <Navbar onclick={handleHidden} />
            <div className='lg:flex mt-16'>
                <Sidebar id={"hiddenID"} />
                <div className='w-full mx-auto lg:pr-5 lg:ml-5'>
                    {Children.map(children, child =>
                        <div>
                            {child}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Tamplate