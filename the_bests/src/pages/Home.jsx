import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import "./MovieGrid.css"

function Home() {

  const [topMovies, setTopMovies] = useState([])


  const getTopRatedMovies = async(url) => {
    const res = await fetch(url).then((res) => res.json());
    
    const data = res.results;
    

    setTopMovies(data)
    
    console.log(data)

  }

  useEffect(() => {
    const url = `${moviesUrl}top_rated?${apiKey}`

    console.log(url);

    getTopRatedMovies(url);
  }, [])


  return (
    <>

    <div className='container'>

      <h2 className='title'>Melhores filmes:</h2>

      <div className="movies-container">
      {topMovies.length > 0 ? (topMovies.map((movie) => <MovieCard movie={movie}/>)) : (<p>Carregando...</p>)}

      </div>
    </div>
     
    

    </> 
  )
}

export default Home