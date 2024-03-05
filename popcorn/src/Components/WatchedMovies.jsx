

const WatchedMovies = ({render, index, renderMovies,setRenderMovies, count, setCount}) => {
    console.log("render", render);
    const dltMovie = (indx) => {
        console.log("Delete", index);
        console.log("movie", renderMovies);
       // console.log(render);
        const dltSingleMovie = [...renderMovies]
       const check = dltSingleMovie.filter((val, ind) => ind !== indx)
       console.log("check", check);
       setRenderMovies(check)
       setCount(count - 1)
    }
    return(
        <div className="movieWatch1">
            <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
            <img width={"40px"} src={render.Poster} alt="" />
            <div className="movieWatch2">
                <p style={{fontSize:"18px", fontWeight:"600", margin:'0'}}>{render.Title}</p>
                <div className="movieWatch3">
                <p style={{marginBottom:"0"}}>⭐{render.ratingStar1 > 10 ? "9.8": render.ratingStar1}</p>
                <p style={{marginBottom:"0"}}>🌟{render.ratingStar2}.0</p>
                <p style={{marginBottom:"0"}}>⌛{render.min}</p>
                </div>
            </div>
            </div>
            <button onClick={()=> dltMovie(index)} style={{border:"none", borderRadius:"50%", padding:"5px 8px", backgroundColor:"#f14568"}}>X</button>
           
        </div>
    )
}

export default WatchedMovies