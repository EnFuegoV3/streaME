import '../assets/css/LandingPage.css'
import { useState, useEffect } from 'react'

export function LandingPage(){

    const [search, setSearch] = useState('')
    const [movieData, setMovieData] = useState([])
  
   
    async function searchDb(search){
        const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=280fef6f78d17d5f2dee520c8ea537f9`);
        const data = await results.json();
        setMovieData(data.results)
        
    }
    
    function handleSearch(event) {
        const name = event.target;
        setSearch(name.value);
        
    }

    const searchResults = movieData.map(movie => {
         return <p key={movie.id}>{movie.title}</p>
    })

    // console.log(movieData)
    // console.log(search)

  

    return (
        <div>
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
            {searchResults}
        </div>
    )
}

//page comes down from top has streame logo and search bar in middle