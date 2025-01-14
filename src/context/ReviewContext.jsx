import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'
import data from '../data/reviewData'

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, setReview] = useState(data)      

      //function to add review
        const AddReview = (newReview) => {
            newReview.id=uuid()
            setReview([newReview, ...review])
        }

    //function to delete review.id in DOM
        const deleteReview = (id) =>{
            if(window.confirm('Are you sure you want to delete review?')){
            setReview(review.filter((item) => item.id !== id))
            }
        }

    return <ReviewContext.Provider value={{review, AddReview, deleteReview}}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext  
