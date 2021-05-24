import React from 'react';

export function MovieDetails (props){
    
    return (
        <div>
            {props.movie ? (
                <div>
                    <h2>{ props.movie.title}</h2>
                    <p>{ props.movie.description}</p>
                </div>
            ) : null}   
        </div>
    )
}