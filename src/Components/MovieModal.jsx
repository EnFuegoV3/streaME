import "../assets/css/MovieModal.css"

export function MovieModal({movie, close}) {

    let providers

    movie ? providers = movie.map(provider => {
            
           return <div className="providers" key={provider.provider_id}>
                    <h2>{provider.provider_name}</h2>
                    <img src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`} alt="" />
                    
                  </div>
                }) : providers = <p>No Streaming options, Available to rent from multiple providers</p>
        
    // movie ? console.log('yes') : console.log('no')
    

    return (
        <div className="selected-movie" onClick={close}>
            {providers}
            <p>Powered by JustWatch</p>
        </div>
    )
}