import React from 'react'
import { Link } from 'react-router-dom'

const CocktailNavbar = () => {
    return (
        <nav className='h-20 flex items-center bg-lime-200'>
            <div className='flex justify-between items-center mx-auto w-[85vw] max-w-[1170px]'>
                <Link to='/15-cocktails'>
                    <img src={'/React-Mini-Projects/CocktailLogo.svg'} alt='cocktail db logo' className='w-48'/>
                </Link>
                <ul className='flex items-center'>
                    <li>
                        <Link className='capitalize inline-block mr-2 font-normal text-lg py-1 px-2 transition hover:text-green-800' to='/15-cocktails'>Home</Link>
                    </li>
                    <li>
                        <Link className='capitalize inline-block mr-2 font-normal text-lg py-1 px-2 transition hover:text-green-800' to='/15-cocktails/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CocktailNavbar