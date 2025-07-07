import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${encodeURIComponent(movie.title)}`);
  };

  return (
    <div className="movieCard" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="details">
          <span>📅 {movie.year}</span>
          <span>⏱️ {movie.duration}</span>
        </div>
        <span className="genre">{movie.genre}</span>
        <div className="rating">⭐ {movie.rating}</div>
      </div>
    </div>
  );
}

export default MovieCard;
