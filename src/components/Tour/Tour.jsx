import './Tour.css'
import './Tour-media.css'

import {useState} from "react";

function Tour ({id, image, info, price, name, removeTourHandler}) {

    const [readMore, setReadMore] = useState(false);

    return(
        <>
            <article className='p2-single-tour'>
                <img src={image} alt={name}/>
                <footer>
                    <div className='p2-tour-info'>
                        <h4>{name}</h4>
                        <h4 className='p2-tour-price'>${price}</h4>
                    </div>
                    <p>
                        {readMore ? info : `${info.substring(0, 150)}...`}
                        <button onClick={() => {setReadMore(prevState => !prevState)}}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button className='p2-delete-btn' onClick={() => {
                        removeTourHandler(id)
                    }}>not interested</button>
                </footer>
            </article>
        </>
    )
}


export default Tour