import { useState } from 'react';
import MovieCard from './movieCard';
import movies from './movies';
import './App.css';

// Harf normalizasyonu fonksiyonu
function normalize(str) {
  return str
    .replace(/İ/g, 'I')   // Büyük İ → I
    .replace(/ı/g, 'i')   // Küçük ı → i
    .toUpperCase();       // Tamamını büyük harfe çevir
}

function App() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(movie =>
    normalize(movie.title).includes(normalize(search))
  );

  return (
    <div className="app">
      <header>
        <h1>🎬 Movie Library</h1>
        <p>Explore the best movies</p>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="movie-list">
        {filteredMovies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
