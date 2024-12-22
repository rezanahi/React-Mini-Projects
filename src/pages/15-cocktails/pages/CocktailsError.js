import React from 'react'
import { Link } from 'react-router-dom'

const CocktailsError = () => {
    return (
        <>
            <section className='p15-error-page p15-section'>
                <div className='p15-error-container'>
                    <h1>oops! it's a dead end</h1>
                    <Link to='/15-cocktails' className='p15-btn p15-btn-primary'>
                        back home
                    </Link>
                </div>
            </section>
        </>
    )
}

export default CocktailsError