import './Question.css'
import './Question-media.css'

import {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function Question ({title, info}) {

    const [showInfo, setShowInfo] = useState(false)

    return(
        <>
            <article className='py-4 px-6 border border-solid border-gray-300 mb-4 rounded shadow-md'>
                <header className='flex justify-between items-center'>
                    <button
                        className='group/button bg-white hover:bg-pink-500 border-pink-500 border w-8 aspect-square flex justify-center items-center rounded-full cursor-pointer ml-4 transition duration-500'
                        onClick={() => {
                            setShowInfo(si => !si)
                        }}>
                        {showInfo ? <AiOutlineMinus
                                className='group-hover/button:fill-white transition fill-pink-700 duration-500'></AiOutlineMinus> :
                            <AiOutlinePlus
                                className='group-hover/button:fill-white transition fill-pink-700 duration-500'></AiOutlinePlus>}
                    </button>
                    <h4 className='leading-6 mb-0' dir='ltr'>{title}</h4>
                </header>
                {showInfo && <p className='text-gray-600 mt-2' dir='ltr'>{info}</p>}
            </article>
        </>
    )
}

export default Question