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
            <main className='bg-emerald-100 w-full py-20 ' dir='ltr'>
                <section className='w-[90vw] max-w-[1170px] mx-auto'>
                    <div className='text-center mb-8 '>
                        <h2 className='flex justify-center items-center font-medium'>
                            <span className='text-5xlxl text-emerald-500 mr-4 font-bold'>/</span> Reviews
                        </h2>
                    </div>
                    <div
                        className='mt-16 mx-auto w-[80vw] h-[450px] max-w-[800px] text-center flex overflow-hidden relative'>
                        {people.map((person, personIndex) => {
                            let className = 'p7-article'
                            if (personIndex === index) {
                                className = 'absolute top-0 left-0 w-full h-full flex flex-col items-center transition duration-500 opacity-100 translate-x-0'
                            } else if ((index === 0 && personIndex === peopleData.length - 1) || (index !== 0 && personIndex === index - 1)) {
                                className = 'absolute top-0 left-0 w-full h-full opacity-0 flex flex-col items-center transition duration-500 -translate-x-1/1'
                            } else {
                                className = 'absolute top-0 left-0 w-full h-full opacity-0 flex flex-col items-center transition duration-500 translate-x-1/1'
                            }
                            return (
                                <article
                                    className={className}
                                    key={person.id}>
                                    <img
                                        className='mb-4 rounded-full w-40 h-40 object-cover shadow-md border-4 border-solid border-gray-900'
                                        alt={person.name} src={person.image}/>
                                    <h4 className='uppercase mb-1 text-emerald-500'>{person.name}</h4>
                                    <p className='capitalize mb-3 text-gray-400'> {person.title} </p>
                                    <p className='max-w-[500px] mt-2 mx-auto text-gray-600'> {person.quote}</p>
                                    <FaQuoteRight className='mt-4 text-5xl fill-emerald-500'></FaQuoteRight>
                                </article>
                            )
                        })}
                        <button
                            className='absolute left-0 top-52 -translate-y-1/2 bg-gray-700 hover:bg-emerald-500 text-white w-5 h-5 md:w-8 md:h-8 md:text-xl grid place-items-center border-transparent rounded text-sm transition cursor-pointer'
                            onClick={previousHandler}>
                            <FiChevronLeft></FiChevronLeft>
                        </button>
                        <button
                            className='absolute right-0 top-52 -translate-y-1/2 bg-gray-700 hover:bg-emerald-500 text-white w-5 h-5 md:w-8 md:h-8 md:text-xl grid place-items-center border-transparent rounded text-sm transition cursor-pointer'
                            onClick={nextHandler}>
                            <FiChevronRight></FiChevronRight>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Slider