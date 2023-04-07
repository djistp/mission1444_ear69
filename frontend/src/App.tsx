import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {Home} from "./Home"
import { Podcast } from './Podcast';
import { Movielist } from './Movie/MovieList';
import { MovieListt } from './MovieMission13';

import './App.css';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Podcast">Podcasts</Link>  
          </li>
          <li>
            <Link to="/Mission13">Mission 13 Stuff</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Podcast" element={<Podcast/>} />
        <Route path="/Movies" element={<Movielist/>} />
        <Route path="/Mission13" element={<MovieListt/>} />
      </Routes>
    
    </>
  );
}

export default App;
