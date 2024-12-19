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
            <nav className='p11-nav'>
                <div className='p11-nav-center'>
                    <div className='p11-nav-header'>
                        <img src={logo} alt='logo'/>
                        <button className='p11-nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                            <FaBars></FaBars>
                        </button>
                    </div>

                        <div className={`p11-links-container`} ref={linksContainerRef}>
                            <ul className='p11-links' ref={linksRef}>
                                {navBarLinks.map((link) => {
                                    return (
                                        <li key={link.id}><a href={link.url}>{link.text}</a></li>
                                    )
                                })}
                            </ul>
                        </div>

                    <ul className='p11-social-icons'>
                        {navBarSocial.map((link) => {
                            return (
                                <li key={link.id}><a href={link.url}>{link.icon}</a></li>
                            )
                        })}
                    </ul>
                </div>

            </nav>
        </>
    )
}


export default NavBar