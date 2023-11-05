import '../assets/css/ResultCards.css'
import error from '../assets/images/no-image.svg'

export function ResultCards(props){
    return (
        <div className='result-cards'id={props.id} key={props.key}>
            <img className="poster-image" onClick={props.handleClick} src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt="Poster Image"/>
            <h3 className='info'>{props.title}</h3>
            <h3 className='info'>{props.release}</h3>
        </div>
    )
}