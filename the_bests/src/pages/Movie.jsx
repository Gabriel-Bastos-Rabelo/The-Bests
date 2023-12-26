import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./Movie.css"
import MovieCard from '../components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const apiKey = import.meta.env.VITE_API_KEY;
const moviesUrl = import.meta.env.VITE_API;
function Movie() {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const res = await fetch(url).then((res) => res.json());
    console.log(res)
    setMovie(res)
    
  }

  useEffect(() => {
    const url = moviesUrl + id + "?" + apiKey;
    console.log(url)
    getMovie(url)
  }, [])



  return (
    <>
    {movie && (
     <div className="container movie-container my-5">
     <div className="row">
         <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" className="img-fluid rounded" />
         </div>
         <div className="col-lg-8 col-md-12">
             <div className="movie-header mb-3">
                 <h2 className="movie-title">{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                 <p className="movie-tagline">{movie.tagline}</p>
             </div>
             <div className="movie-info">
                 <p className="movie-overview">{movie.overview}</p>

                 <div className="movie-details">
                    <p><strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
                    <p><strong>Duration:</strong> {movie.runtime} minutes</p>
                    <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
                    <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                 </div>
                 
             </div>
         </div>
     </div>
 </div>
    )}

</>
  )
} 

export default Movie