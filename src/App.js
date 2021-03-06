import React, { useState, useEffect } from 'react';
import './App.css';
import {MovieList} from './components/movie-list';
import {MovieDetails} from './components/movie-details';
import {MovieForm} from './components/movie-form'

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

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

  const movieClicked = movie =>{
    
    setSelectedMovie(movie);
  }

  const loadMovie = movie => {
    setSelectedMovie(movie);
  }
  const editClicked = movie => {
    setEditedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
        <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked} editClicked={editClicked}/>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          <MovieForm movie={editedMovie}/>
      </div>
    </div>
  );
}

export default App;
