import './Question.css'
import './Question-media.css'

import {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function Question ({title, info}) {

    const [showInfo, setShowInfo] = useState(false)

    return(
        <>
            <article className='p4-question'>
                <header>
                    <h4>{title}</h4>
                    <button className='p4-btn' onClick={() => {setShowInfo(si => !si)}}>
                        {showInfo ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
                    </button>
                </header>
                {showInfo && <p>{info}</p>}
            </article>
        </>
    )
}

export default Question