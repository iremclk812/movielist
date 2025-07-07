import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from './movies';
import './App.css';

function MovieDetail() {
    const { title } = useParams();
    const navigate = useNavigate();

    const movie = movies.find(m => m.title === decodeURIComponent(title));

    if (!movie) {
        return <div style={{ padding: '40px', color: 'white' }}>Film bulunamadı</div>;
    }

    return (
        <div style={{ backgroundColor: '#1f2937', color: 'white', minHeight: '100vh', padding: '40px' }}>
            <button onClick={() => navigate(-1)} style={{ fontSize: '1.5rem', background: 'none', border: 'none', color: 'white' }}>⬅</button>

            <div style={{ marginTop: '20px' }}>
                <h1>{movie.title}</h1>
                <div style={{ fontSize: '1.1rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span>⭐ {movie.rating}</span>
                    <span>📅 {movie.year}</span>
                    <span>⏱️ {movie.duration}</span>
                </div>
                <span className="genre">{movie.genre}</span>

                <h2 style={{ marginTop: '30px' }}>Hikaye</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{movie.description}</p>

                <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                    <a href={movie.trailer} target="_blank" rel="noreferrer" style={{
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none'
                    }}>
                        ▶️ Fragmanı İzle
                    </a>
                    <button style={{
                        backgroundColor: '#6b7280',
                        color: 'white',
                        padding: '10px 16px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}>
                        📌 Listeye Ekle
                    </button>
                </div>

                <div style={{ backgroundColor: '#374151', marginTop: '40px', padding: '20px', borderRadius: '10px' }}>
                    <h3>🎬 Film Bilgileri</h3>
                    <p><strong>Yönetmen:</strong> {movie.director}</p>
                    <p><strong>Oyuncular:</strong><br />{movie.actors.map(actor => <div key={actor}>{actor}</div>)}</p>
                    <p><strong>Türler:</strong> {movie.genre}</p>
                    <p><strong>Süre:</strong> {movie.duration}</p>
                    <p><strong>Yıl:</strong> {movie.year}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
