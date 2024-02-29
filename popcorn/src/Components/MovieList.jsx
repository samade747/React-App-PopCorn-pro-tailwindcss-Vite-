import React, { useEffect, useState } from "react"

function MovieList({ moviesData, setMoivesData }) {

    return(
        <div>
        {moviesData.map((movie) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    )
}

export default MovieList