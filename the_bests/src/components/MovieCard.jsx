

const imageUrl = import.meta.env.VITE_IMG

import {FaStar} from "react-icons/fa"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie, showLink = true}) {


  return (
    // <div className="movie-card">
    //     <img src={imageUrl + movie.poster_path}></img>
    //     <h2>{movie.title}</h2>

    //     <p><FaStar></FaStar>{movie.vote_average}</p>

    //     {showLink && <Link to = {`/movie/${movie.id}`}>Detalhes</Link>}
    // </div>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl + movie.poster_path} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <p><FaStar></FaStar>{movie.vote_average}</p>
      
      {showLink && <Link to = {`/movie/${movie.id}`} ><Button variant="outline-warning" size="lg">Detalhes</Button></Link>}
    </Card.Body>
  </Card>
  );
}

export default MovieCard;