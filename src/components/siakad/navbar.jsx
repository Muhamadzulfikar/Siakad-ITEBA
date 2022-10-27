const Navbar = ({ onclick }) => {
    return (
        <nav className="flex fixed z-10 top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-gray-900 dark:to-gray-800 text-white text-3xl justify-between px-3 py-1 items-center">
            <button onClick={onclick} className='flex flex-col justify-between w-12 h-10 border p-2 rounded'>
                <span className="bg-white w-full h-1"></span>
                <span className="bg-white w-full h-1"></span>
                <span className="bg-white w-full h-1"></span>
            </button>
            <h1 className='font-medium ml-2'>SIAKAD</h1>

            <div className="lg:w-14 lg:h-14 w-10 h-10 rounded-full">
                <img className="w-full h-full rounded-full" src="img/fotoZul.jpeg" alt="" />
            </div>
        </nav>
    )
}
export default Navbar