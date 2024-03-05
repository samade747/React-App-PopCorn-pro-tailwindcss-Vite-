import React, { useState } from "react";


const RatingStars = ({ratingCount, setRatingCount, setShowBtn, setRatingStar1 ,setRatingStar2 ,setWatchedMin, setCount, count}) => {
    const [stars, setStars] = useState(["☆","☆","☆","☆","☆","☆","☆","☆","☆","☆"])
    const [opac , setOpac] = useState(false)
    const updataStar = (index) =>{
      console.log("hello bhai", index);
      const cvrtDup = [...stars]
      const hello = []
      const check = cvrtDup.filter((val, ind)=> {
      if(ind <= index){
  
      return hello.unshift(val = "★") };
      })
        const slicingLeftStar =cvrtDup.slice(index+ 1);
        const joinBothArray = hello.concat(slicingLeftStar);
        console.log("check3", joinBothArray);
        console.log("check2", slicingLeftStar);
        console.log(hello);
        const userRating = `${index+1}.${index}`
        setRatingCount(index + 1)
        setStars(joinBothArray)
        setShowBtn(true)
        setRatingStar1(userRating)
        setRatingStar2(index + 1)
        
    }
    return (
      <div>
        {
          stars.map((star, ind)=> <span  style={{fontSize:"27px", cursor:"pointer"}} key={ind}  onClick={()=> updataStar(ind)}>{star}</span>)
        }
      </div>
    )
  }


  export default RatingStars