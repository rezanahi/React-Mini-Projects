import './StripeNavbar.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {FaBars} from "react-icons/fa";

function StripeNavbar () {
    const {openSidebar, openModal, closeModal} = useStripeAppContext()

    return(
        <>
            <nav className='p13-nav'>
                <div className='p13-nav-center'>
                    <div className='p13-nav-header'>
                        <img src='/images/logo.svg' alt='logo' className='p13-nav-logo'/>
                        <button className='p13-btn p13-toggle-btn' onClick={openSidebar}>
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <ul className='p13-nav-links'>
                        <li>
                            <button className='p13-link-btn'>
                                products
                            </button>
                        </li>
                        <li>
                            <button className='p13-link-btn'>
                                developers
                            </button>
                        </li>
                        <li>
                            <button className='p13-link-btn'>
                                company
                            </button>
                        </li>
                    </ul>
                    <button className='p13-btn p13-signin-btn'>Sign in</button>
                </div>
            </nav>
        </>
    )
}


export default StripeNavbar