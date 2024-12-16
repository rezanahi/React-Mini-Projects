import './Slider.css'
import peopleData from "./SliderData";
import {useState, useEffect, useCallback} from "react";
import {FaQuoteRight} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Slider () {

    const [people, setPeople] = useState(peopleData);
    const [index, setIndex] = useState(0);

    function nextHandler () {
        if(index === peopleData.length - 1) {
            setIndex(0)
        } else {
            setIndex(index => index + 1)
        }
    }

    function previousHandler () {
        if(index === 0) {
            setIndex(peopleData.length - 1)
        } else {
            setIndex(index => index - 1)
        }
    }

    useEffect(() => {
        let timer = setInterval(() => {
            if(index === peopleData.length - 1) {
                setIndex(0)
            } else {
                setIndex(index => index + 1)
            }
        }, 2000)

        return function () {
            clearInterval(timer);
        }
    }, [index])

    return(
        <>
            <section className='p7-section'>
                <div className='p7-title'>
                    <h2>
                        <span>/</span> Reviews
                    </h2>
                </div>
                <div className='p7-section-center'>
                    {people.map((person, personIndex) => {
                        let className = 'p7-article'
                        if(personIndex === index) {
                            className = 'p7-article p7-activeSlide'
                        } else if((index === 0 && personIndex === peopleData.length - 1) || (index !== 0 && personIndex === index - 1)) {
                            className = 'p7-article p7-lastSlide'
                        } else {
                            className = 'p7-article p7-nextSlide'
                        }
                        return (
                            <article
                                className={className}
                                key={person.id}>
                                <img className='p7-person-img' alt={person.name} src={person.image}/>
                                <h4>{person.name}</h4>
                                <p className='p7-title'> {person.title} </p>
                                <p className='p7-text'> {person.quote}</p>
                                <FaQuoteRight className='p7-icon'></FaQuoteRight>
                            </article>
                        )
                    })}
                    <button className='p7-prev' onClick={previousHandler}>
                        <FiChevronLeft></FiChevronLeft>
                    </button>
                    <button className='p7-next' onClick={nextHandler}>
                        <FiChevronRight></FiChevronRight>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Slider