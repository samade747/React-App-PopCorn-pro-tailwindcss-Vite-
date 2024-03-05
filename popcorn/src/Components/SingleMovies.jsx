import React, { useState } from "react";

const SingleMovies = ({ movies, moviesData, setShowDes , setSpecificMovie, specificMovie, setShowBtn}) => {
    //console.log("specificMovie", specificMovie);
   const singleDataHandler = (uid) => {
     const makingDuplicate = [...moviesData];
     const filteredSingleMovie = makingDuplicate.find(
       (val) => val.imdbID === uid
     );
     console.log("Hello", filteredSingleMovie);
     setSpecificMovie(filteredSingleMovie)
     console.log("specificMovie",specificMovie);
     setShowDes(false)
   };
   return (
     <div
       onClick={() => singleDataHandler(movies.imdbID)}
       style={{ display: "flex", alignItems: "center" }}
       className="descript"
     >
       <img width={"30px"} src={movies?.Poster} alt="moviePic" />
       <div>
         <p className="para">{movies?.Title}</p>
         <p className="para">
           <span style={{ marginRight: "4px" }}>📅</span>
           {movies?.Year}
         </p>
       </div>
     </div>
   );
 };
 
 export default SingleMovies