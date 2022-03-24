const Navbar = () => {
    return(
        <nav class="xl:flex fixed top-0 w-screen justify-between py-4 px-5 bg-white xl:bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-gray-600 xl:text-white rounded border-b border-gray-400 xl:border-0">
            <navLeftContent />
            <navRightcontent />
        </nav>
    )
}