import '../assets/css/LandingPage.css'
import { useState, useEffect } from 'react'
import { ResultCards } from './ResultCards'
import { MovieModal } from './MovieModal'

export function LandingPage(){

    const [search, setSearch] = useState('')
    const [movieData, setMovieData] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([])
    const [modalToggle, setModalToggle] = useState(false)
  
   
    async function searchDb(search){
        const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=280fef6f78d17d5f2dee520c8ea537f9`);
        const data = await results.json();
        setMovieData(data.results)
        
    }


    
    function handleSearch(event) {
        const name = event.target;
        setSearch(name.value);
        
    }

    //function when selected movie click to get selected movie info and display modal of movie
    async function movieClick(id) {
        const results = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=280fef6f78d17d5f2dee520c8ea537f9`);
        const data = await results.json();
        setSelectedMovie(data.results.US)
        setModalToggle(true)
    }

    function modalClose() {
        setModalToggle(false)
    }

    const searchResults = movieData.map(movie => {
         return <ResultCards
                    key={movie.id}
                    id={movie.id}
                    handleClick={()=>{movieClick(movie.id)}}
                    poster={movie.poster_path}
                    title={movie.title}
                    release={movie.release_date}  
         />
    })

    console.log(movieData)
    // console.log(search)
    console.log(selectedMovie)
  

    return (
        <div style={{position: 'relative'}}>
            {modalToggle && <MovieModal close={modalClose} movie={selectedMovie}/>}
            <div className='search'>
                <h1 className='logo'>StreaME</h1>
                <input
                    className='search-box'
                    type="text"
                    placeholder='Search Movies...'
                    onChange={handleSearch}
                />
                <button
                    className='search-button'
                    onClick={() => {searchDb(search)}}
                >Find</button>
                
            </div>
            <div className='card-container'>
                    {searchResults}
            </div>
            
        </div>
    )
}

//page comes down from top has streame logo and search bar in middle