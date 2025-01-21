import React from 'react'
import { Link } from 'react-router-dom'

const CocktailNavbar = () => {
    return (
        <nav className='p15-navbar bg-lime-200'>
            <div className='p15-nav-center'>
                <Link to='/15-cocktails'>
                    <img src='/CocktailLogo.svg' alt='cocktail db logo' className='p15-logo'/>
                </Link>
                <ul className='p15-nav-links'>
                    <li>
                        <Link to='/15-cocktails'>Home</Link>
                    </li>
                    <li>
                        <Link to='/15-cocktails/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CocktailNavbar