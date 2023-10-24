import React from 'react'
import "./MovieDetail.scss"
const MovieDetailCard = ({data}) => {
    const detail=data.data;
    console.log(data);
  return (
    <div className='movie-section'>
      <div className='movie-left'>
        <h1>{detail.Title}</h1>
        <div className="movie-rating">
            <span>IMDB rating: {detail.imdbRating} </span>
            <span> Year : {detail.Year}</span>
        </div>
        <div className="movie-plot">{detail.Plot}</div>
        <div className="movie-info">
            <div>Director : {detail.Director}</div>
            <div>Stars : {detail.Actors}</div>
            <div>Genres : {detail.Genre}</div>
            <div>Awards : {detail.Awards}</div>
        </div>
      </div>
      <div className='movie-right'>
        <img src={detail.Poster} alt="Not found" />
      </div>
    </div>
  )
}

export default MovieDetailCard
