const Card = () => {
        <section className="cardContainer">
            <div className="card">
                <img src={source} alt={altImage} className="cardImage" />
                <Tagline />
                <h1 class=" w-96 text-3xl font-bold mt-3 ml-9 mb-48">{title}</h1>
                <ul title="card-time" class="mb-10">
                    <li class=" inline-block ml-10 mr-9">{tagline4}</li>
                    <li class=" inline-block">{tagline5}</li>
                </ul>            
            </div>
        </section>
}