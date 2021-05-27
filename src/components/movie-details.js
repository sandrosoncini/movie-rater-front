import React, {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function MovieDetails (props){

    const [highlighted, setHighlighted] = useState(-1)

    const  highlightedRate = high => evt => {
        setHighlighted(high)
    }
    

    const mov = props.movie;
    
    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a86dae480928e0f74b67181f418218f20fa41398'
            },
            body: JSON.stringify({stars : rate + 1})

        })
        .then ( () => getDetails())
        .catch (error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a86dae480928e0f74b67181f418218f20fa41398'
            }
        })
        .then (resp => resp.json())
        .then (resp => props.updateMovie(resp))
        .catch (error => console.log(error))
    }

    return (
        <React.Fragment>
            {mov ? (
                <div >
                    <h2>{ mov.title}</h2>
                    <p>{ mov.description}</p>  
                    <FontAwesomeIcon icon={faStar} className={mov.avg_ratings > 0 ? "orange": ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_ratings > 1 ? "orange": ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_ratings > 2 ? "orange": ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_ratings > 3 ? "orange": ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_ratings > 4 ? "orange": ''}/>
                    ({mov.number_of_ratings})
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        { [...Array(5)].map((e,i) => {
                            return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'purple' : ''}
                                    
                                    onMouseEnter = {highlightedRate(i)}
                                    onMouseLeave = {highlightedRate(-1)}
                                    onClick= {rateClicked(i)}
                            />
                            
                                    
                        })}
                    </div>
                </div>
            ) : null}   
        </React.Fragment>
    )
}