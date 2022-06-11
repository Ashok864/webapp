// 1 useEffct import
// 3 searchMovies() - movie search pana

//last1- new state create "movie" "setmovie"

import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';

// import moviecard
import MovieCard  from './MovieCard';


//Api = omdbapi used acess key gmail [key = 34ffcbb3]

const API_URL = 'http://www.omdbapi.com?apikey=34ffcbb3'; //2 string - link and genrate api key

//7 access cls=movie
// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }

function App() {
  const [movies, setMovies] = useState([]); //last 1

  //2nd state use search data access input box value='searchTerm'
  const [searchTerm, setSearchTerm] = useState('');

  // === api fun() ====
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);    //4 inside tild subol use for dynamic and any VAR use '${}' symbol must
    const data = await response.json();

    //5 check console msg & fun() cl any plc
    //last1 console - chng setMovies
    // console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => { 
   searchMovies('Spiderman') //6 fun() declare - console la collct search data
  
  },[])

  return (
    <div className="App">
      <h1>@shok Movie.com</h1>
      
      <div className='search'>
        <input
        placeholder='Search for movies'
        value={searchTerm}   // 2nd state
        onChange={(e)=> {setSearchTerm(e.target.value)}}       
        />
        
        <img
        src={SearchIcon} 
        alt='search'
        onClick={()=> {searchMovies(searchTerm)}}
        />

      </div>

      {/* =======  */}
      {movies?.length > 0
          ? (
            <div className="container">

              {/* movie cls la dan movie detail show itha unique comp la ppodanum reusability = 'moviecard.js' */}
              {/* =============================== */}
              {/* <div className='movie'>
                <div>
                  //===== movie1 var la oru objct copy pani set pannitom upper==== 
                  <p>{movie1.Year}</p>       
                </div>

                <div>
                  <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                </div>

                <div>
                  <span>{movie1.Type}</span>
                  <h3>{movie1.Title}</h3>
                </div>
              </div> */}

              {/* movie1 ku bathila create state 'movies' */}
              {/* <MovieCard movie1={movie1}/> */}
              {movies.map((movie) => (    //movies kula dan movie data stored because 'setmovies(data.search)'
                <MovieCard movie = {movie} />   // movicard la 'movie1' ku chng 'movie'
              ))}

            </div>

          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}

      
    </div>
  );
}

export default App;
