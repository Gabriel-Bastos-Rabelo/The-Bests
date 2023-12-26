import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import "./MovieGrid.css"
const apiKey = import.meta.env.VITE_API_KEY;
const searchUrl = import.meta.env.VITE_SEARCH;

function Search() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")
  const [movies, setMovies] = useState([]);


  const getSearchMovies = async(url) => {
    const res = await fetch(url).then((res) => res.json());
    
    const data = res.results;
    

    setMovies(data)
    
    console.log(data)

  }

  useEffect(() => {

    console.log()
    const url = `${searchUrl}?${apiKey}&query=${query}`

    console.log(url);

    getSearchMovies(url);
  }, [query])

  
  
  return (
    <>

    <div className='container'>

      <h2 className='title'>Results for: <span className='query-text'>{query}</span></h2>

      <div className="movies-container">
      {movies.length > 0 ? (movies.map((movie) => <MovieCard movie={movie}/>)) : (<p>Carregando...</p>)}

      </div>
    </div>
     
    

    </> 
  )
}

export default Search