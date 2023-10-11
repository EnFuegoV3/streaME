import '../assets/css/ResultCards.css'


export function ResultCards(props){
    return (
        <div className='result-cards'id={props.id} key={props.key}>
            <img className="poster-image" src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt="Poster Image" />
            <h3>{props.title}</h3>
            <p>{props.release}</p>
        </div>
    )
}