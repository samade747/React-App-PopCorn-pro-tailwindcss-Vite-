import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";


function MovieList({ moviesData, setMoivesData, renderMovies, setRenderMovies }) {

  const [specificMovie, setSpecificMovie] = useState({});
  const [mintue, setMinute] = useState("0");
  const [watchedMin, setWatchedMin] = useState('');
  const [showDes, setShowDes] = useState(true);
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [ratingStar1, setRatingStar1] = useState('');
  const [ratingStar2, setRatingStar2] = useState('');
  const [ratingCount, setRatingCount] = useState(0);
    

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
      <div className="flex justify-center mt-20 gap-15">
        <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rodunded-3x1 py-5 relative" >
          <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
        { moviesData &&
        moviesData?.map((movies, index) => {
          <SingleMovies movies={movies} key={index} moviesData={moviesData} setShowDes={setShowDes} specificMovie={specificMovie} setSpecificMovie={setSpecificMovie} showBtn={showBtn} setShowBtn={setShowBtn} />
        })}
        </div>
        <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rodunded-3x1 py-5 relative" >
          <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
          { showDes ? <div>
          <div className="flex ">
            <p>Movies you watched</p>
            <div className="flex justify-center items-center">
              <div className="flex jusify-center items-center">
              <img
                src="https://www.emojiall.com/images/120/joypixels/0023-20e3.png"
                width={"15px"}
                alt=""
              />
              <p style={{marginLeft:"5px"}}>{count ? count : "0"} movies</p>
            </div>
            <div>
              <p>⭐ {ratingStar1 > 10? "9.8": ratingStar1 }</p>
            </div>
            <div>
              <p>🌟 {ratingStar2? ratingStar2 + ".0" : "0.0"}</p>
            </div>
            <div>
              <p>⌛{watchedMin? watchedMin : "0"}</p>
            </div>
              </div>
            </div>
          </div> : <div>
            <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center"></p>
            <div className="flex justify-center">
              <img width={"100px"} src={specificMovie?.Poster}/>
            </div>
            <div>
              <p>{specificMovie?.Title}</p>
              <p>{specificMovie?.Year}</p>
              <p>{specificMovie?.Genre}</p>
              <p>{specificMovie?.rating}</p>
            </div>}
            <div>
              
            </div>
        
        
          </div>  
        </div>
 
        








        
    )
}

export default MovieList