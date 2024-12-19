import './NavBar.css'

import logo from './logo.svg'
import {FaBars, FaTwitter} from "react-icons/fa";
import {navBarLinks, navBarSocial} from "../../pages/11-navbar-project/NavBarProjectData";
function NavBar () {


    return(
        <>
            <nav className='p11-nav'>
                <div className='p11-nav-center'>
                    <div className='p11-nav-header'>
                        <img src={logo} alt='logo'/>
                        <button className='p11-nav-toggle'>
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <div className='p11-links-container p11-show-container'>
                        <ul className='p11-links'>
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