import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '2e1bec79';
  const searchQuery = 'star'; // Search term for movies (e.g., "star")

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          console.error('No movies found');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMoviesData();
  }, []);

  if (!movies.length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.grid}>
      {movies.map((movie, index) => (
        <div key={index} style={styles.card}>
          <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
          <div style={styles.details}>
            <h2 style={styles.title}>{movie.Title}</h2>
            <p style={styles.text}>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 'auto',
  },
  details: {
    padding: '15px',
  },
  title: {
    fontSize: '1.5rem',
    margin: '0',
    marginBottom: '10px',
  },
  text: {
    margin: '0',
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#555',
  },
};

export default MovieList;
