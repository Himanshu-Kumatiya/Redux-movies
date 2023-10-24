import React from 'react'
import "./MovieCard.scss"
import {Link} from "react-router-dom"
const MovieCard = (props) => {
  return (
    <div className='card-item'>
      <Link to={`/movie/${props.data.imdbID}`}>
      <div className='card-inner'>
        <div className="card-top">
          <img src={props.data.Poster} alt="Not found" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h3>{props.data.Title}</h3>
            <p>{props.data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
