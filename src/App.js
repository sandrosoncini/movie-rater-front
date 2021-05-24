import React, { useState, useEffect } from 'react'
import './App.css';
import {MovieList} from './components/movie-list'

function App() {

  const [movies, setMovie] = useState([]);

  useEffect (() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token a86dae480928e0f74b67181f418218f20fa41398'
      }
    })
    .then (resp => resp.json())
    .then (resp => setMovie(resp))
    .catch (error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies}/>
      
        <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
