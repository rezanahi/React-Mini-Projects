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
            <article className='bg-white h-[480px] flex flex-col items-center py-6 px-8 rounded text-center shadow transition hover:shadow-xl'>
                <div className='w-36 h-36 rounded-full mx-auto mb-6 relative before:w-full before:h-full before:bg-emerald-500 before:absolute before:rounded-full before:-top-1 before:-right-2'>
                    <img src={reviewData.image} alt={reviewData.name} className='w-full block h-full object-cover rounded-full relative'/>
                    <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full bg-emerald-500 translate-y-1/4 '>
                        <FaQuoteRight className='fill-white'></FaQuoteRight>
                    </span>
                </div>
                <h4 className='mb-1'>{reviewData.name}</h4>
                <p className='mb-2 uppercase text-emerald-500 text-sm'>{reviewData.job}</p>
                <p className='mb-6'>{reviewData.text}</p>
                <div className='mt-auto'>
                    <button className='group/btn text-xl bg-transparent border-transparent mx-2 cursor-pointer hover:fill-emerald-700' onClick={previousReviewHandler}>
                        <FaChevronLeft className='fill-emerald-500 group-hover/btn:fill-emerald-700 transition duration-500'></FaChevronLeft>
                    </button>
                    <button className='group/btn text-xl bg-transparent border-transparent mx-2 cursor-pointer hover:fill-emerald-700' onClick={nextReviewHandler}>
                        <FaChevronRight className='fill-emerald-500 group-hover/btn:fill-emerald-700 transition duration-500'></FaChevronRight>
                    </button>
                </div>
                <button className='mt-2 w-36 bg-white text-emerald-500 py-1 px-2 capitalize rounded transition border-transparent cursor-pointer hover:bg-emerald-500 hover:text-white duration-500' onClick={randomReviewHandler}>
                    Surprise Me
                </button>
            </article>
        </>
    )
}

export default Review