import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";


function MovieList({ moviesData, setMoivesData, renderMovies, setRenderMovies }) {

  const [specificMovie, setSpecificMovie] = useState({});
  const [mintue, setMinute] = useState("0");
  const [watchedMin, setWatchedMin] = useState('');
  const [showDes, setShowDes] = useState(true);
  const [count, setCount] = useState(0);
    

      console.log(moviesData)
const randomMint = Math.floor(Math.random() * 10)
    const addMovies = () => {
      let mint;
      if(randomMint <= 4){
        mint = '120 min'
        console.log(mint);
      } else if(randomMint > 4) {
        confirm.log("165min");
        mint = '165 min'
        console.log(mint);
      }
      else if(randomMint > 7) {
        mint = '200 min'
        console.log(mint);
      }
    }

    const dublicaRenderMovies = [...renderMovies]
      console.log(dublicaRenderMovies, 'dublicaRenderMovies');
      console.log('specificMovie', specificMovie);
      dublicaRenderMovies.push({
        ...specificMovie,
        min: mint,
        ratingStar1: ratingStar1,
        ratingStar2: ratingStar2,
      })
      setMinute(mint)
      setWatchedMin(mint)
      setRenderMovies(dublicaRenderMovies)
      setShowDes(true)
      setCount(count + 1)
    return(
        <div>
        
      </div>
    )
}

export default MovieList