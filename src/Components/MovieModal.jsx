import "../assets/css/MovieModal.css"

export function MovieModal({movie, close}) {

        const providers = movie.map(provider => {
            
           return <div className="providers" key={provider.provider_id}>
                    <h2>{provider.provider_name}</h2>
                    <img src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`} alt="" />
                    
                  </div>
                })

    

    return (
        <div className="selected-movie" onClick={close}>
            {providers}
            <p>Powered by JustWatch</p>
        </div>
    )
}