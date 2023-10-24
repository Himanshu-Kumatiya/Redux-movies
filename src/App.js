import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
        <Route element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
