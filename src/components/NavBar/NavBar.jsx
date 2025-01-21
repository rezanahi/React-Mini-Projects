import './NavBar.css'

import logo from './logo.svg'
import {FaBars} from "react-icons/fa";
import {navBarLinks, navBarSocial} from "../../pages/11-navbar-project/NavBarProjectData";
import {useEffect, useRef, useState} from "react";
function NavBar () {

    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        let linksHeight = linksRef.current.clientHeight;
        if(showLinks) {
            linksContainerRef.current.style.height = linksHeight + 'px'
        } else {
            linksContainerRef.current.style.height = 0 + 'px'
        }
    }, [showLinks])

    return(
        <>
            <nav className='bg-white shadow'>
                <div className='md:max-w-[1170px] md:mx-auto md:flex md:items-center md:justify-between md:p-4'>
                    <div className='md:p-0 flex items-center justify-between p-4'>
                        <img src={logo} alt='logo'/>
                        <button className='text-2xl text-emerald-500 bg-transparent border-transparent transition cursor-pointer hover:text-emerald-700 hover:rotate-90 md:hidden' onClick={() => setShowLinks(!showLinks)}>
                            <FaBars></FaBars>
                        </button>
                    </div>

                        <div className={`overflow-hidden transition-all md:!h-auto`} ref={linksContainerRef}>
                            <ul className='md:flex' ref={linksRef}>
                                {navBarLinks.map((link) => {
                                    return (
                                        <li key={link.id}><a className='text-bg-gray-700 text-lg capitalize block py-2 px-4 hover:bg-emerald-200 hover:text-emerald-900 hover:pl-6 md:p-0 md:my-0 md:mx-2 md:hover:p-0 md:hover:bg-transparent' href={link.url}>{link.text}</a></li>
                                    )
                                })}
                            </ul>
                        </div>

                    <ul className='hidden md:flex md:gap-4'>
                        {navBarSocial.map((link) => {
                            return (
                                <li key={link.id}><a className='md:text-emerald-600 md:transition md:hover:text-emerald-500' href={link.url}>{link.icon}</a></li>
                            )
                        })}
                    </ul>
                </div>

            </nav>
        </>
    )
}


export default NavBar