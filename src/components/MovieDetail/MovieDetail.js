import React, { useEffect, useState } from 'react'
import movieApi from '../../common/API/movieApi';
import { useParams } from 'react-router-dom';
import MovieDetailCard from "./MovieDetailCard"
import { APIKEY } from '../../common/API/MovieApiKey';

const MovieDetail = () =>  {
  const { imdbID } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoad] = useState(true);
  const fetchmovies = async () => {
    setLoad(true);
    try{
      const temp = await movieApi.get(`?apiKey=${APIKEY}&i=${imdbID}&Plot=full`);
      setData(temp);
    }catch(err) {
      console.error(err);
    };
    setLoad(false);
    console.log("The response in movie details : ",data);
  }
  useEffect(() => {
    fetchmovies();
  }, []);
  return (
    <div>
    {
      loading ? (<div>Loading</div>):(Object.keys(data).length !== 0 ? (
      <MovieDetailCard data={data}/>
    ):(<div></div>))
    }
  </div>
  )
}

export default MovieDetail
