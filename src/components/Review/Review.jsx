import './Review.css'
import './Review-media.css'
import {useState} from "react";

import ReviewsData from '../../pages/3-reviews/ReviewsData'

// Icons
import { FaQuoteRight, FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Review () {
    const [index, setIndex] = useState(0)
    const reviewData = ReviewsData[index]

    function nextReviewHandler() {
        if (index === ReviewsData.length - 1) {
            setIndex(0)
        } else {
            setIndex(prevState => prevState + 1)
        }
    }

    function previousReviewHandler() {
        if(index === 0) {
            setIndex(ReviewsData.length - 1)
        } else {
            setIndex(prevState => prevState - 1)
        }
    }

    function randomReviewHandler() {
        const randomNumber = Math.floor(Math.random() * ReviewsData.length);
        setIndex(randomNumber)
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