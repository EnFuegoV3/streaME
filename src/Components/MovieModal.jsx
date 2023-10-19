import "../assets/css/MovieModal.css"

export function MovieModal({movie, close}) {

    //need to add support for free w/ ads, rent and buy options

    let providers
    let withAds

    //get ad free watch options
    movie.flatrate ? providers = movie.flatrate.map(provider => {
            
           return <div className="providers" key={provider.provider_id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`} alt="" />
                    <h2>{provider.provider_name}</h2>
                  </div>
                }) : providers = <p>No Streaming options, Available to rent from multiple providers</p>
   
    //get watch free with ads
    movie.ads ? withAds = movie.ads.map(ad => {
        return <div className="providers" key={ad.provider_id}>
                    <img src={`https://image.tmdb.org/t/p/w200/${ad.logo_path}`} alt="" />
                    <h2>{ad.provider_name}</h2>
               </div>
    })  : withAds = <p>No watch free with ads providers available</p>
    

    return (
        <div className="selected-movie" onClick={close}>
            <h2><u>Streaming Channels</u></h2>
            {providers}
            <h2><u>Watch free with ads</u></h2>
            {withAds}
            <p>Powered by <a href="https://www.justwatch.com/">JustWatch</a></p>
        </div>
    )
}