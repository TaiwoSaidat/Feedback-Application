// import React from 'react'
// import { useState } from 'react'
import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import { FaTimes } from 'react-icons/fa'


function ReviewItem({review}) {
  const {deleteReview} = useContext(ReviewContext)
    // const [rating, setRating] = useState(6)
    // const [text, setText]  = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    
  return (
    <>
      <div className="card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className='close' onClick={()=>deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
    </>
  )
}

export default ReviewItem