import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
    return (
        <article className='bg-white mb-8 shadow transition grid grid-rows-[auto_1fr] rounded hover:shadow-lg'>
            <div className='p15-img-container'>
                <img className='h-full w-full object-cover rounded-tl rounded-tr' src={image} alt={name}/>
            </div>
            <div className='p-6'>
                <h3 className='mb-2 text-2xl'>{name}</h3>
                <h4 className='mb-2'>{glass}</h4>
                <p className='mb-2 text-gray-700'>{info}</p>
                <Link className='uppercase text-green-300 border-2 border-green-800 px-2 py-4 inline-block transition cursor-pointer text-sm bg-green-800 hover:bg-green-500 rounded-md p15-btn-primary p15-btn-details' to={`/15-cocktails/${id}`} >
                    details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail