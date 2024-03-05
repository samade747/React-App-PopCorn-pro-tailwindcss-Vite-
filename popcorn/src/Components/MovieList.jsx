import React, { useState } from "react";
import SingleMovies from "./SingleMovies";
import RatingStars from "./RatingStars";

const MovieList = ({ moviesData, setMoviesData, renderMovies, setRenderMovies }) => {
  const [specificMovie, setSpecificMovie] = useState({});
  const [minute, setMinute] = useState("0");
  const [watchedMin, setWatchedMin] = useState('');
  const [showDes, setShowDes] = useState(true);
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [ratingStar1, setRatingStar1] = useState('');
  const [ratingStar2, setRatingStar2] = useState('');
  const [ratingCount, setRatingCount] = useState(0);

  console.log(moviesData);

  const randomMint = Math.floor(Math.random() * 10);

  const addMovies = () => {
    let mint;
    if (randomMint <= 4) {
      mint = '120 min';
      console.log(mint);
    } else if (randomMint > 4 && randomMint <= 7) {
      console.log("165 min");
      mint = '165 min';
    } else if (randomMint > 7) {
      mint = '200 min';
      console.log(mint);
    }
  };

  const dublicaRenderMovies = [...renderMovies];
  console.log(dublicaRenderMovies, 'dublicaRenderMovies');
  console.log('specificMovie', specificMovie);
  dublicaRenderMovies.push({
    ...specificMovie,
    min: minute,
    ratingStar1: ratingStar1,
    ratingStar2: ratingStar2,
  });
  setMinute(minute);
  setWatchedMin(minute);
  setRenderMovies(dublicaRenderMovies);
  setShowDes(true);
  setCount(count + 1);

  return (
    <div className="flex justify-center mt-20 gap-15">
      <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rounded-3x1 py-5 relative">
        <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
        {moviesData &&
          moviesData.map((movie, index) => (
            <SingleMovies
              movies={movie}
              key={index}
              moviesData={moviesData}
              setShowDes={setShowDes}
              setSpecificMovie={setSpecificMovie}
              specificMovie={specificMovie}
              setShowBtn={setShowBtn}
            />
          ))}
      </div>
      <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rounded-3x1 py-5 relative">
        <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
        {showDes ? (
          <div>
            <div className="flex ">
              <p>Movies you watched</p>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <img src="https://www.emojiall.com/images/120/joypixels/0023-20e3.png" width={"15px"} alt="" />
                  <p>{count ? count : "0"}Movies</p>
                  <p>{ratingStar1 > 10 ? "9.8" : ratingStar1}</p>
                  <p>{ratingStar2 ? ratingStar2 + ".0" : "0.0"}</p>
                  <p>{watchedMin ? watchedMin : "0"}</p>
                </div>
              </div>
            </div>
            <div>
              {renderMovies.map((render, ind) => (
                <WatchedMovies
                  index={ind}
                  render={render}
                  key={ind}
                  renderMovies={renderMovies}
                  setRenderMovies={setRenderMovies}
                  watchedMin={watchedMin}
                  ratingStar1={ratingStar1}
                  ratingStar2={ratingStar2}
                  count={count}
                  setCount={setCount}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p style={{ position: "absolute", left: "20px", top: "0px", backgroundColor: "#fff", width: "20px", fontSize: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", color: 'black', borderRadius: "50%" }}>←</p>
            <div className="movieCategory">
              <div>
                <img width={"100px"} src={specificMovie.Poster} alt="" />
              </div>
              <div>
                <p>{specificMovie?.Title}</p>
                <p>16 July {specificMovie?.Year}- 148 min</p>
                <p>Action, Adventure, Sci-Fi</p>
                <p>⭐8.8 IMDb rating</p>
              </div>
            </div>
            <div className="starsPar1">
              <div className="starsPar2">
                <div style={{ color: '#907209', fontSize: "25px", display: "flex", alignItems: "center" }}> <RatingStars setRatingCount={setRatingCount} ratingCount={ratingCount} setShowBtn={setShowBtn} specificMovie={specificMovie} setRatingStar1={setRatingStar1} setRatingStar2={setRatingStar2} setWatchedMin={setWatchedMin} /><p style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "500" }}>{ratingCount}</p></div>

                {showBtn === false ? null : <button onClick={() => addMovies()} style={{ padding: "7px", border: "none", borderRadius: "15px", fontWeight: "600", cursor: "pointer", margin: "10px", backgroundColor: "#6e45f1", color: "#fff" }}>+ Add to list</button>}
              </div>
              <div>
                <p style={{ fontSize: '12px' }}><i>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</i></p>
                <p>Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Eliot Page</p>
                <p>Directed by Christopher Marlon</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;



// import React, { useState } from "react";
// import SingleMovies from "../Components/SingleMovies"; // Assuming SingleMovies is another component you have

// function MovieList({ moviesData, setMoviesData, renderMovies, setRenderMovies }) {

//   const [specificMovie, setSpecificMovie] = useState({});
//   const [minute, setMinute] = useState("0");
//   const [watchedMin, setWatchedMin] = useState('');
//   const [showDes, setShowDes] = useState(true);
//   const [count, setCount] = useState(0);
//   const [showBtn, setShowBtn] = useState(false);
//   const [ratingStar1, setRatingStar1] = useState('');
//   const [ratingStar2, setRatingStar2] = useState('');
//   const [ratingCount, setRatingCount] = useState(0);
    

//   console.log(moviesData);

//   const randomMint = Math.floor(Math.random() * 10);

//   const addMovies = () => {
//     let mint;
//     if (randomMint <= 4) {
//       mint = '120 min';
//       console.log(mint);
//     } else if (randomMint > 4 && randomMint <= 7) {
//       console.log("165 min");
//       mint = '165 min';
//     } else if (randomMint > 7) {
//       mint = '200 min';
//       console.log(mint);
//     }
//   };

//   const dublicaRenderMovies = [...renderMovies];
//   console.log(dublicaRenderMovies, 'dublicaRenderMovies');
//   console.log('specificMovie', specificMovie);
//   dublicaRenderMovies.push({
//     ...specificMovie,
//     min: minute,
//     ratingStar1: ratingStar1,
//     ratingStar2: ratingStar2,
//   });
//   setMinute(minute);
//   setWatchedMin(minute);
//   setRenderMovies(dublicaRenderMovies);
//   setShowDes(true);
//   setCount(count + 1);

//   return (
//     <div className="flex justify-center mt-20 gap-15">
//       <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rounded-3x1 py-5 relative">
//         <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
//         {moviesData &&
//           moviesData.map((movie, index) => (
//             <SingleMovies
//               movies={movie}
//               key={index}
//               moviesData={moviesData}
//               setShowDes={setShowDes}
//               specificMovie={specificMovie}
//               setSpecificMovie={setSpecificMovie}
//               showBtn={showBtn}
//               setShowBtn={setShowBtn}
//             />
//           ))}
//       </div>
//       <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rounded-3x1 py-5 relative">
//         <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
//         {showDes ? (
//           <div>
//             <div className="flex ">
//               <p>Movies you watched</p>
//               <div className="flex justify-center items-center">
//                 <div className="flex jusify-center items-center">
//                   <img src="https://www.emojiall.com/images/120/joypixels/0023-20e3.png" width={"15px"} alt="" />
//                   <p>{count ? count : "0"}Movies</p>
//                   <p>{ratingStar1 > 10 ? "9.8" : ratingStar1}</p>
//                   <p>{ratingStar2 ? ratingStar2 + ".0" : "0.0"}</p>
//                   <p>{watchedMin ? watchedMin : "0"}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               {renderMovies.map((render, ind) => (
//                 <WatchedMovies
//                   index={ind}
//                   render={render}
//                   key={ind}
//                   renderMovies={renderMovies}
//                   setRenderMovies={setRenderMovies}
//                   watchedMin={watchedMin}
//                   ratingStar1={ratingStar1}
//                   ratingStar2={ratingStar2}
//                   count={count}
//                   setCount={setCount}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <p style={{ position: "absolute", left: "20px", top: "0px", backgroundColor: "#fff", width: "20px", fontSize: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", color: 'black', borderRadius: "50%" }}>←</p>
//             <div className="movieCategory">
//               <div>
//                 <img width={"100px"} src={specificMovie.Poster} alt="" />
//               </div>
//               <div>
//                 <p>{specificMovie?.Title}</p>
//                 <p>16 July {specificMovie?.Year}- 148 min</p>
//                 <p>Action, Adventure, Sci-Fi</p>
//                 <p>⭐8.8 IMDb rating</p>
//               </div>
//             </div>
//             <div className="starsPar1">
//               <div className="starsPar2">
//                 <div style={{ color: '#907209', fontSize: "25px", display: "flex", alignItems: "center" }}> <RatingStars setRatingCount={setRatingCount} ratingCount={ratingCount} setShowBtn={setShowBtn} specificMovie={specificMovie} setRatingStar1={setRatingStar1} setRatingStar2={setRatingStar2} setWatchedMin={setWatchedMin} /><p style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "500" }}>{ratingCount}</p></div>

//                 {showBtn === false ? null : <button onClick={() => addMovies()} style={{ padding: "7px", border: "none", borderRadius: "15px", fontWeight: "600", cursor: "pointer", margin: "10px", backgroundColor: "#6e45f1", color: "#fff" }}>+ Add to list</button>}
//               </div>
//               <div>
//                 <p style={{ fontSize: '12px' }}><i>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</i></p>
//                 <p>Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Eliot Page</p>
//                 <p>Directed by Christopher Marlon</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;






// import React, { useState } from "react";
// import MovieList from "../Components/MovieList";


// function MovieList({ moviesData, setMoivesData, renderMovies, setRenderMovies }) {

//   const [specificMovie, setSpecificMovie] = useState({});
//   const [mintue, setMinute] = useState("0");
//   const [watchedMin, setWatchedMin] = useState('');
//   const [showDes, setShowDes] = useState(true);
//   const [count, setCount] = useState(0);
//   const [showBtn, setShowBtn] = useState(false);
//   const [ratingStar1, setRatingStar1] = useState('');
//   const [ratingStar2, setRatingStar2] = useState('');
//   const [ratingCount, setRatingCount] = useState(0);
    

//       console.log(moviesData)
// const randomMint = Math.floor(Math.random() * 10)
//     const addMovies = () => {
//       let mint;
//       if(randomMint <= 4){
//         mint = '120 min'
//         console.log(mint);
//       } else if(randomMint > 4) {
//         confirm.log("165min");
//         mint = '165 min'
//         console.log(mint);
//       }
//       else if(randomMint > 7) {
//         mint = '200 min'
//         console.log(mint);
//       }
//     }

//     const dublicaRenderMovies = [...renderMovies]
//       console.log(dublicaRenderMovies, 'dublicaRenderMovies');
//       console.log('specificMovie', specificMovie);
//       dublicaRenderMovies.push({
//         ...specificMovie,
//         min: mint,
//         ratingStar1: ratingStar1,
//         ratingStar2: ratingStar2,
//       })
//       setMinute(mint)
//       setWatchedMin(mint)
//       setRenderMovies(dublicaRenderMovies)
//       setShowDes(true)
//       setCount(count + 1)
//     return(
//       <div className="flex justify-center mt-20 gap-15">
//         <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rodunded-3x1 py-5 relative" >
//           <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
//         { moviesData &&
//         moviesData?.map((movies, index) => {
//           <SingleMovies movies={movies} key={index} moviesData={moviesData} setShowDes={setShowDes} specificMovie={specificMovie} setSpecificMovie={setSpecificMovie} showBtn={showBtn} setShowBtn={setShowBtn} />
//         })}
//         </div>
//         <div className="lg:7/12 md:10/12 xs:w-10/12 sm:w-10/12 bg-gray-800 rodunded-3x1 py-5 relative" >
//           <p className="absolute top-0 right-7 bg-gray-800 w-6 h-6 rounded-full justify-center items-center">-</p>
//           { showDes ? <div>
//           <div className="flex ">
//             <p>Movies you watched</p>
//             <div className="flex justify-center items-center">
//               <div className="flex jusify-center items-center">
//               <img src="https://www.emojiall.com/images/120/joypixels/0023-20e3.png"width={"15px"} alt="" />
//               <p>{count ? count : "0"}Movies</p>
//               <p>{ratingStar1 > 10 ? "9.8" : ratingStar1}</p>
//               <p>{ratingStar2 ? ratingStar2 + ".0" : "0.0" }</p>
//               <p>{watchedMin ? watchedMin : "0"}</p>
               
//               </div> 
//               </div>  
//           </div>  
//           <div>
//             {
//               renderMovies.map((render, ind) => <WatchedMovies index={ind} render={render} key={ind} renderMovies={renderMovies} setRenderMovies={setRenderMovies} watchedMin={watchedMin} ratingStar1={ratingStar1} ratingStar2={ratingStar2} count={count} setCount={setCount}/>)
//             }
//             </div>
//         </div> : <div>
//           <p style={{position:"absolute",left:"20px",top:"0px", backgroundColor:"#fff", width:"20px", fontSize:"20px", height:"20px", display:"flex", justifyContent:"center", alignItems:"center", color:'black', borderRadius:"50%"}}>←</p>
//           <div className="movieCategory">
//           <div>
//             <img width={"100px"} src={specificMovie.Poster} alt="" />
//           </div>
//           <div>
//             <p>{specificMovie?.Title}</p>
//             <p>16 July {specificMovie?.Year}- 148 min</p>
//             <p>Action, Adventure, Sci-Fi</p>
//             <p>⭐8.8 IMDb rating</p>
//           </div>
//           </div>
//           <div className="starsPar1">
//             <div className="starsPar2">
//               <div style={{color:'#907209', fontSize:"25px", display:"flex", alignItems:"center"}}> <RatingStars setRatingCount={setRatingCount} ratingCount={ratingCount} setShowBtn={setShowBtn} specificMovie={specificMovie} setRatingStar1={setRatingStar1} setRatingStar2={setRatingStar2} setWatchedMin={setWatchedMin}/><p style={{marginBottom:"15px", fontSize:"18px", fontWeight:"500"}}>{ratingCount}</p></div>
               
//               {showBtn === false ? null : <button onClick={()=> addMovies()} style={{padding:"7px", border:"none", borderRadius:"15px", fontWeight:"600", cursor:"pointer", margin:"10px", backgroundColor:"#6e45f1", color:"#fff"}}>+ Add to list</button>}
//             </div>
//             <div>
//               <p style={{fontSize:'12px'}}><i>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</i></p>
//               <p>Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Eliot Page</p>
//               <p>Directed by Christopher Marlon</p>
//             </div>
//           </div>
//         </div>
// }
// </div>
//   );
// };
        
    

// export default MovieList