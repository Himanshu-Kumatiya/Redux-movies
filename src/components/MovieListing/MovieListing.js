import React from 'react'
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"
const MovieListing = () => {
    const movies=useSelector((state)=>state.movies.movies);
    console.log("movies listing",movies);
    return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movies-container'>{
            movies.Response==="True"?(
                movies.Search.map((movie,index)=>{
                    return <MovieCard key={index} data={movie}/>
                })
            ):
            (
                <div>data not found {movies.Error}</div>
            )
        }</div>
      </div>
    </div>
  )
}

export default MovieListing
