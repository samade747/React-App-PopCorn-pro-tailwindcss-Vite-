import React, { useEffect, useState } from 'react';
import Navigationbar from './Components/Navigationbar';
import MovieList from './Components/MovieList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [renderMovies, setRenderMovies] = useState([]);
  const [moviesData, setMoivesData] = useState(""); 
  

  useEffect(()=> {
    async function renderMovies(moviekaname = "boys"){
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1cb35c2a&s=${moviekaname}`);
      const res = await response.json();
      console.log('res', res);
      
      // res jo aya uper se isperh Search kya hai
        setMoivesData(res.Search || []);
    }
      renderMovies(inputValue)
  }, [inputValue])


return (
    <>
        <Navigationbar inputValue={inputValue} setInputValue={setInputValue} /> 
        <MovieList moviesData={moviesData} setMoivesData={setMoivesData} renderMovies={renderMovies} setRenderMovies={setRenderMovies}/>
    </>
  )
}

export default App
