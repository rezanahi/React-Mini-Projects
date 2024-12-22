import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
    return (
        <article className='p15-cocktail'>
            <div className='p15-img-container'>
                <img src={image} alt={name}/>
            </div>
            <div className='p15-cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link className='p15-btn p15-btn-primary p15-btn-details' to={`/15-cocktails/${id}`} >
                    details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail