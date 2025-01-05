import './Tour.css'
import './Tour-media.css'

import {useState} from "react";

function Tour ({id, image, info, price, name, removeTourHandler}) {

    const [readMore, setReadMore] = useState(false);

    return(
        <>
            <article className='bg-amber-100 rounded my-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden'>
                <img className='w-full h-80 object-cover' src={image} alt={name}/>
                <footer className='py-7 px-4'>
                    <div className='mb-6 flex items-center justify-between'>
                        <h4>{name}</h4>
                        <h4 className='text-emerald-600 bg-amber-100 rounded py-1 px-2.5'>${price}</h4>
                    </div>
                    <p>
                        {readMore ? info : `${info.substring(0, 150)}...`}
                        <button className='bg-transparent border-transparent capitalize text-emerald-600 cursor-pointer text-lg pl-1' onClick={() => {setReadMore(prevState => !prevState)}}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button className='block w-52 mx-auto mt-4 text-red-700 border border-red-700 bg-transparent py-1 px-2 rounded hover:bg-red-700 hover:text-amber-100 transition' onClick={() => {
                        removeTourHandler(id)
                    }}>not interested</button>
                </footer>
            </article>
        </>
    )
}


export default Tour