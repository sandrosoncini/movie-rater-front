import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export function MovieList (props){

    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    }

    const editClicked = movie => {
        console.log(movie.title)
        props.editClicked(movie);
    }

    return (
        <div>
            <div>
                {props.movies && props.movies.map( movie => {
                    return (
                        <div key={movie.id}>        
                            <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
                            <FontAwesomeIcon icon={faEdit} onClick={ ()=> editClicked(movie)}/>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>  
                    )
                })}
            </div> 
        </div>
    )
}