import './style.css'
const hidden = () => {
    var x = document.getElementById("hiddenID")
    return (
        x.classList.toggle("hidden")
    )
}
const Navbar = (props) => {
    return (
        <nav className="flex bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-3xl justify-between px-3 py-1">
            <div className="flex items-center">
                <img src='man-2_icon-icons.com_55041.svg' className='h-16'/>
                <h1 className='font-medium ml-2'>SIAKAD</h1>
                <button onClick={hidden} className='ml-10 border border-gray-100 py-2 px-4 rounded'>
                    <img src='humberger.png' className='h-5' />
                </button>
            </div>

          <div className="fotoZul"></div>
        </nav>
    )
}
export default Navbar