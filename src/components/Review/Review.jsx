import './Review.css'
import './Review-media.css'
import {useReducer, useState} from "react";

import ReviewsData from '../../pages/3-reviews/ReviewsData'

// Icons
import { FaQuoteRight, FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Review () {

    const [index, dispatch] = useReducer(ReviewReducer, 0)
    const reviewData = ReviewsData[index]

    function ReviewReducer (index, action) {
        switch (action.type) {
            case 'nextReview' :
                if (index === ReviewsData.length - 1) {
                    return 0
                } else {
                    return index + 1
                }
            case 'previousReview' :
                if(index === 0) {
                    return ReviewsData.length - 1
                } else {
                    return index - 1
                }
            case 'randomReview' :
                let randomNumber = Math.floor(Math.random() * ReviewsData.length);
                while (randomNumber === index) {
                    randomNumber = Math.floor(Math.random() * ReviewsData.length);
                }
                return randomNumber
            default :
                return 0
        }
    }

    function nextReviewHandler() {
        dispatch({
            type: 'nextReview'
        })
    }

    function previousReviewHandler() {
        dispatch({
            type: 'previousReview'
        })
    }

    function randomReviewHandler() {
        dispatch({
            type: 'randomReview'
        })
    }

    return(
        <>
            <article className='p3-review'>
                <div className='p3-img-container'>
                    <img src={reviewData.image} alt={reviewData.name} className='p3-person-img'/>
                    <span className='p3-quote-icon'>
                        <FaQuoteRight></FaQuoteRight>
                    </span>
                </div>
                <h4 className='p3-author'>{reviewData.name}</h4>
                <p className='p3-job'>{reviewData.job}</p>
                <p className='p3-info'>{reviewData.text}</p>
                <div className='p3-button-container'>
                    <button className='p3-prev-btn' onClick={previousReviewHandler}>
                        <FaChevronLeft></FaChevronLeft>
                    </button>
                    <button className='p3-next-btn' onClick={nextReviewHandler}>
                        <FaChevronRight></FaChevronRight>
                    </button>
                </div>
                <button className='p3-random-btn' onClick={randomReviewHandler}>
                    Surprise Me
                </button>
            </article>
        </>
    )
}

export default Review