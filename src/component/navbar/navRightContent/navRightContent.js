const navRightcontent = () => {
    const iconName = ['home-outline', 'medkit-outline', 'accessibility-outline', 'videocam-outline', 'people-outline']
    const iconClass = ['mr-10 xl:mr-0 xl:ml-3 xl:text-3xl', 'mr-10 xl:mr-0 xl:ml-5 xl:text-3xl', 'mr-10 xl:mr-0 xl:text-3xl xl:ml-14', 'mr-10 xl:mr-0 xl:text-3xl xl:ml-2', '"mr-10 xl:mr-0 xl:text-3xl xl:ml-6']
    const page = ['home', 'first aid', 'sucidal prevention', 'video', 'mentoring']
    const nav = [{iconName}, {iconClass}, {page}]
    // <div class="flex text-3xl xl:text-xl xl:items-center">

    nav.mapping(function(){
        return (
            <>
                <ion-icon name={nav.iconName} className={nav.iconClass}></ion-icon>
                <li class=" hidden xl:block mr-16">{nav.page}</li>
            </>
        )
    })
}