import {React, useEffect } from 'react'
import "./Home.scss"
import {useDispatch} from "react-redux"
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/API/movieApi"
import {APIKEY} from "../../common/API/MovieApiKey"
import { addMovies } from '../../features/slices/movieSlices'
const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const movieText="Harry";
        const fetchmovies=async()=>{
            const res=await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.error(err);
            });
            dispatch(addMovies(res.data));
            console.log("The response : ",res.data);
        }
        fetchmovies();
    },[]);
  return (
    <div className='home'>
      <MovieListing/>
    </div>
  )
}

export default Home
