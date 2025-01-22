import React from 'react'
import { Link } from 'react-router-dom'

const CocktailsError = () => {
    return (
        <>
            <div className='w-full h-full min-h-screen bg-lime-100'>
            <section className='flex justify-center py-20'>
                <div className='text-center capitalize'>
                    <h1 className='mb-8'>oops! it's a dead end</h1>
                    <Link to='/15-cocktails' className='uppercase text-green-800 border-2 border-green-800 inline-flex transition cursor-pointer text-sm bg-transparent rounded py-2 px-4 hover:bg-green-100'>
                        back home
                    </Link>
                </div>
            </section>
            </div>
        </>
    )
}

export default CocktailsError